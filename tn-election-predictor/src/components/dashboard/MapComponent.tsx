import { useEffect, useState, useCallback, useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getDynamicPredictions, getAllianceColor } from '../../data/constituencies2026';
import type { SimulationParams } from '../../data/constituencies2026';
import { ConstituencyDetail } from "./ConstituencyDetail";
import { AnimatePresence } from "framer-motion";
import type { GeoJsonObject, FeatureCollection } from 'geojson';

// Serve from public directory — Vite serves /public as static root
const GEOJSON_URL = "/tn_assembly.geojson";

interface MapComponentProps {
  simulationParams: SimulationParams;
}

export const MapComponent = ({ simulationParams }: MapComponentProps) => {
    const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
    const [loading, setLoading] = useState(true);
    const [hoveredName, setHoveredName] = useState<string | null>(null);
    const [hoveredInfo, setHoveredInfo] = useState<{
      alliance: string; party: string; acNo: number; winProb: number; margin: string;
    } | null>(null);
    const [selectedConstituency, setSelectedConstituency] = useState<{
        acNo: number; name: string; district: string;
    } | null>(null);

    // Calculate predictions only when params change
    const { constituencies } = useMemo(() => getDynamicPredictions(simulationParams), [simulationParams]);

    const getConstituencyPrediction = useCallback((acNo: number) => {
      return constituencies.find(c => c.acNo === acNo);
    }, [constituencies]);

    useEffect(() => {
        fetch(GEOJSON_URL)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                setGeoData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("GeoJSON load fail:", err);
                setLoading(false);
            });
    }, []);

    const styleFeature = useCallback((feature: any) => {
        const acNo = feature?.properties?.ac_no || 0;
        const pred = getConstituencyPrediction(acNo);
        if (!pred) return { color: '#ccc', weight: 0.5 };

        const alliance = pred.prediction.predictedWinner || 'OTHERS';
        const color = getAllianceColor(alliance as any);
        const isHovered = feature?.properties?.ac_name === hoveredName;

        return {
            fillColor: isHovered ? '#1e293b' : color,
            weight: isHovered ? 2.5 : 0.8,
            opacity: 1,
            color: isHovered ? '#000' : 'rgba(255,255,255,0.8)',
            fillOpacity: isHovered ? 0.95 : 0.75,
        };
    }, [hoveredName, getConstituencyPrediction]);

    const onEachFeature = useCallback((feature: any, layer: any) => {
        const acName = feature.properties?.ac_name || 'Unknown';
        const acNo = feature.properties?.ac_no || 0;
        const pred = getConstituencyPrediction(acNo);
        if (!pred) return;
        
        const alliance = pred.prediction.predictedWinner || 'OTHERS';
        const allianceColor = getAllianceColor(alliance as any);
        const winProb = Math.max(
          pred.prediction.spaWinProb, pred.prediction.ndaWinProb,
          pred.prediction.tvkWinProb, pred.prediction.ntkWinProb
        );
        const margin = pred.prediction.margin || 'unknown';
        const marginBadge = margin === 'tossup' ? '🔥 Toss-up' : margin === 'lean' ? '⚠️ Lean' : '✅ Safe';

        layer.bindTooltip(
            `<div style="font-weight:700;font-size:13px;margin-bottom:3px">${acName}</div>
             <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
               <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${allianceColor}"></span>
               <span style="font-weight:600;color:${allianceColor}">${alliance}</span>
               <span style="color:#999">•</span>
               <span style="font-size:11px;font-weight:700">${winProb.toFixed(0)}%</span>
             </div>
             <div style="font-size:10px;color:#666">${marginBadge} (Click for Live Intel)</div>`,
            { sticky: true, direction: 'top', offset: [0, -10], className: 'custom-tooltip' }
        );

        layer.on({
            mouseover: (e: any) => {
                setHoveredName(acName);
                setHoveredInfo({ alliance, party: alliance, acNo, winProb, margin });
                const target = e.target;
                target.setStyle({
                    weight: 2.5,
                    color: '#000',
                    fillColor: '#1e293b',
                    fillOpacity: 0.95,
                });
                target.bringToFront();
            },
            mouseout: (e: any) => {
                setHoveredName(null);
                setHoveredInfo(null);
                const target = e.target;
                target.setStyle({
                    fillColor: allianceColor,
                    weight: 0.8,
                    color: 'rgba(255,255,255,0.8)',
                    fillOpacity: 0.75,
                });
            },
            click: () => {
                setSelectedConstituency({ acNo, name: acName, district: pred.district });
            }
        });
    }, [getConstituencyPrediction]);

    if (loading) {
        return (
            <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="text-sm text-muted-foreground font-medium">Loading 234 Assembly Constituencies...</span>
            </div>
        );
    }

    if (!geoData) {
        return (
            <div className="w-full h-full min-h-[500px] flex items-center justify-center text-red-500 font-medium">
                Failed to load Map Data. Check console for details.
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-inner relative" style={{ zIndex: 1 }}>
            <style>{`
                .custom-tooltip {
                    background: rgba(255,255,255,0.96) !important;
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(0,0,0,0.08) !important;
                    border-radius: 10px !important;
                    padding: 8px 12px !important;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
                    font-family: inherit !important;
                }
                .custom-tooltip::before { display: none !important; }
                .leaflet-container { background: #f0f4f8 !important; }
            `}</style>

            <AnimatePresence>
                {selectedConstituency && (
                    <ConstituencyDetail 
                        acNo={selectedConstituency.acNo}
                        onClose={() => setSelectedConstituency(null)}
                    />
                )}
            </AnimatePresence>

            {hoveredName && hoveredInfo && (
                <div className="absolute top-3 right-3 z-[1000] bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/50 min-w-[160px]">
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">AC #{hoveredInfo.acNo}</div>
                    <div className="font-bold text-sm mt-0.5">{hoveredName}</div>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getAllianceColor(hoveredInfo.alliance as any) }}></span>
                        <span className="text-xs font-bold" style={{ color: getAllianceColor(hoveredInfo.alliance as any) }}>{hoveredInfo.alliance}</span>
                        <span className="text-xs font-black">{hoveredInfo.winProb.toFixed(0)}%</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">
                      {hoveredInfo.margin === 'tossup' ? '🔥 Toss-up' : hoveredInfo.margin === 'lean' ? '⚠️ Lean' : '✅ Safe'}
                    </div>
                </div>
            )}

            <MapContainer
                center={[11.0, 78.5]}
                zoom={7}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%", zIndex: 1 }}
                attributionControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />
                <GeoJSON
                    key={JSON.stringify(simulationParams)} // Force re-render of GeoJSON layer when params change
                    data={geoData as GeoJsonObject}
                    style={styleFeature}
                    onEachFeature={onEachFeature}
                />
            </MapContainer>
        </div>
    );
};
