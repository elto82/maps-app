import { createContext } from "react";
import { Map } from "mapbox-gl";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
  geoRouteBeetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);
