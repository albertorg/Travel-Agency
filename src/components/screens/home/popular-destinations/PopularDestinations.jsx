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
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-tagline">Destination lists</span>
                    <h2 className="section-title">Go Exotic Places</h2>
                </div>
                <div className="section-PopularDestinations">
                    <div className="destination-container">
                        <img src={habana} alt="hoteles en la habana" />
                        <h3>La Habana</h3>
                    </div>
                    <div className="destination-container">
                        <img src={santiago} alt="hoteles en la habana" />
                        <h3>Santiago de Cuba</h3>
                    </div>
                    <div className="destination-container">
                        <img src={varadero} alt="hoteles en la habana" />
                        <h3>Varadero</h3>
                    </div>
                    <div className="destination-container">
                        <img src={guardalavaca} alt="hoteles en la habana" />
                        <h3>Guardalavaca</h3>
                    </div>
                    <div className="destination-container">
                        <img src={trinidad} alt="hoteles en la habana" />
                        <h3>Trinidad</h3>
                    </div>
                </div>
            </div >
        </section>
    )
}