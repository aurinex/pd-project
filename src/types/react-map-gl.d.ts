declare module 'react-map-gl' {
  import * as React from 'react';
  
  export interface MapProps {
    style?: React.CSSProperties;
    mapStyle?: string;
    mapboxAccessToken?: string;
    onMove?: (evt: { viewState: any }) => void;
  }
  
  export interface MarkerProps {
    latitude: number;
    longitude: number;
    onClick?: () => void;
  }
  
  export interface PopupProps {
    latitude: number;
    longitude: number;
    anchor?: string;
    onClose?: () => void;
    closeButton?: boolean;
    closeOnClick?: boolean;
  }
  
  export interface SourceProps {
    id: string;
    type: string;
    data: any;
  }
  
  export interface LayerProps {
    id: string;
    type: string;
    paint?: any;
  }
  
  export const Map: React.FC<MapProps & any>;
  export const Marker: React.FC<MarkerProps & any>;
  export const Popup: React.FC<PopupProps & any>;
  export const NavigationControl: React.FC<any>;
  export const Source: React.FC<SourceProps & any>;
  export const Layer: React.FC<LayerProps & any>;
  
  export default Map;
} 