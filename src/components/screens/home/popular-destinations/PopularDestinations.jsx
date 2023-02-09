import React from "react";
import habana from '../../../../assets/destinations/habana/hoteles en la habana (miniatura).webp'
import santiago from '../../../../assets/destinations/santiago/hoteles en santiago de cuba (miniatura).webp'
import varadero from '../../../../assets/destinations/varadero/hoteles en varadero (miniatura).webp'
import guardalavaca from '../../../../assets/destinations/guardalavaca/hoteles en guardalavaca (miniatura).webp'
import trinidad from '../../../../assets/destinations/trinidad/hoteles en trinidad (miniatura).webp'
import './styles.css'

export const PopularDestinations = () => {
    return(
        <section className="popularDest-container">
            <div className="destination_area main_container">

                <div className="titles_container">
                    <span className="section-tagline">Destination lists</span>
                    <h2 className="section-title">Popular destinations in Cuba</h2>
                </div>

                <div className="zones_container first_zone">
                    <div className="zone_destination-container">
                        <img src={habana} alt="hoteles en la habana" />
                        <div className="name_zone">
                            <h3>La Habana</h3>
                        </div>
                    </div>
                    <div className="zone_destination-container">
                        <img src={varadero} alt="hoteles en varadero" />
                        <div className="name_zone">
                            <h3>Varadero</h3>
                        </div>
                    </div>
                    <div className="zone_destination-container">
                        <img src={guardalavaca} alt="hoteles en guardalavaca" />
                        <div className="name_zone">
                            <h3>Guardalavaca</h3>
                        </div>
                    </div> 
                </div>

                <div className="zones_container second_zone">
                    <div className="zone_destination-container">
                        <img src={trinidad} alt="hoteles en trinidad" />
                        <div className="name_zone">
                            <h3>Trinidad</h3>
                        </div>
                    </div>
                    <div className="zone_destination-container">
                        <img src={santiago} alt="hoteles en santiago de cuba" />
                        <div className="name_zone">
                            <h3>Santiago de Cuba</h3>
                        </div>
                    </div>
                </div>

            </div >
        </section>
    )
}