import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useCartStore } from '../store/shopStore';

const DeliveryMap: React.FC = () => {
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const setDeliveryLocation = useCartStore(state => state.setDeliveryLocation);

    useEffect(() => {
        if (position) {
            const fetchAddress = async () => {
                try {
                    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
                        params: {
                            lat: position.lat,
                            lon: position.lng,
                            format: 'json'
                        }
                    });
                    const address = response.data.display_name;
                    setAddress(address);
                } catch (error) {
                    console.error('Error fetching address:', error);
                }
            };
            fetchAddress();
        }
    }, [position]);

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
                setDeliveryLocation(e.latlng);
            }
        });
        return position === null ? null : (
            <Marker position={position} />
        );
    };

    return (
        <div>
            {address && <div style={{ marginTop: '10px', textAlign: 'left', color: 'white', marginBottom:'10px' }}>Your addres is : {address}</div>}
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
            </MapContainer>
            
        </div>
    );
};

export default DeliveryMap;
