// File: src/views/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';
import logo from '../assets/logo.png';
import heroimage from '../assets/image.jpeg';
import { motion } from 'framer-motion';


// Image imports
import img1 from '../assets/jojobaranti.jpg';
import img2 from '../assets/jojobarantidandruff.jpg';
import img3 from '../assets/jojobarantipsoriasis.jpg';
import img4 from '../assets/jojobarRejuvenating.jpg';
import img5 from '../assets/jojobarAntiAging.jpg';
import img6 from '../assets/jojobardaycare.jpg';
import img7 from '../assets/femimmune.jpg';
import img8 from '../assets/dailyvita.jpg';
import img9 from '../assets/Haircaretablet.jpg';
import img10 from '../assets/ferrocell.jpg';
import img11 from '../assets/milkthistle.jpg';
import img12 from '../assets/jointeasetablet.jpg';
import img13 from '../assets/omegaplus.jpg';
import img14 from '../assets/neuroboost.jpg';
import img15 from '../assets/vitamind3.jpg';
import img16 from '../assets/livercaretablet.jpg';
import img17 from '../assets/Rpathri.jpg';
import img18 from '../assets/Likorin.jpg';

const productImages = {
    Cosmetics: [img1, img2, img3, img4, img5, img6],
    Nutraceuticals: [img7, img8, img9, img10, img11, img12, img13, img14, img15],
    Herbals: [img16, img17, img18]
};

const products = {
    Cosmetics: [
        {
            name: "Jojoba R Anti Fungal Cream",
            desc: "Fast-absorbing, non-greasy emollient with antifungal & anti-inflammatory action. Soothes eczema & fungal skin conditions."
        },
        {
            name: "Jojoba R Anti Dandruff Shampoo",
            desc: "Gentle cleanser that targets dandruff, itchiness, and flaking. Enriched with moisturizers for a healthy scalp."
        },
        {
            name: "Jojoba R Anti Psoriasis Cream",
            desc: "Special formulation to reduce inflammation, scaling, and redness in psoriasis-prone skin. Restores comfort."
        },
        {
            name: "Jojoba R Rejuvenating Face Wash",
            desc: "Neem & aloe-based cleanser to remove dirt and oil while soothing acne-prone or sensitive skin."
        },
        {
            name: "Jojoba R Anti Aging Cream",
            desc: "Fights wrinkles, fine lines, and pigmentation. Improves elasticity and gives a youthful glow."
        },
        {
            name: "Jojoba R Day Care Cream",
            desc: "Hydrates, protects from UV, and soothes skin from sunburn, tan, or minor wounds. Daily skin defense."
        }
    ],
    Nutraceuticals: [
        {
            name: "RVibes Fem Immune Capsule",
            desc: "Strengthens women's immunity with balanced herbal nutrition."
        },
        {
            name: "RVibes Daily Vita Plus Tablet",
            desc: "Daily multivitamin support for overall vitality and wellness."
        },
        {
            name: "RVibes Hair Care Tablet",
            desc: "Promotes healthy hair growth and reduces hair fall."
        },
        {
            name: "RVibes Ferro Cell Capsule",
            desc: "Iron supplement to combat anemia and boost energy."
        },
        {
            name: "RVibes Milk Thistle Capsule",
            desc: "Liver detox and protection through herbal support."
        },
        {
            name: "RVibes Joint Ease Tablet",
            desc: "Eases joint pain and improves flexibility."
        },
        {
            name: "RVibes Omega Plus Capsule",
            desc: "Supports brain, heart, and vision health with omega-3s."
        },
        {
            name: "RVibes Neuroboost B12 Tablet",
            desc: "Enhances nerve function and mental alertness."
        },
        {
            name: "RVibes Vitamin D3 Tablet",
            desc: "Improves bone strength and immunity with natural D3."
        }
    ],
    Herbals: [
        {
            name: "Liver Care Tablet",
            desc: "Maintains liver function and supports natural detox."
        },
        {
            name: "R-Pathri Relif Tablet",
            desc: "Helps dissolve kidney stones and reduces pain."
        },
        {
            name: "Likorin Syrup",
            desc: "Boosts digestion and supports liver and bile health."
        }
    ]
};

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Cosmetics');
    const [selectedProduct, setSelectedProduct] = useState(null);


    return (
        <div className="landing-wrapper">
            <header className="navbar">
                <div className="logo-wrapper">
                    <img src={logo} alt="Rvibes Logo" className="logo-img" />
                    <span className="logo-text">Rvibes Homeopathy</span>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>
                </div>
                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-content">
                    <img src={heroimage} alt="Hero" className="hero-image" />
                </div>
            </section>


            <section className="products-section" id="products">
                <h2 className="section-title">Our Products</h2>
                <div className="product-tabs">
                    {Object.keys(products).map((cat) => (
                        <button
                            key={cat}
                            className={`tab-button ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="product-list">
                    {products[activeCategory].map((item, idx) => (
                        <motion.div
  key={idx}
  className="product-item"
  initial={{ rotateY: 90 }}
  animate={{ rotateY: 0 }}
  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
  whileHover={{
    rotateY: 10,
    rotateX: 5,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.3)"
  }}
  whileTap={{
    rotateY: 10,
    rotateX: 5,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.3)"
  }}
>
  <img src={productImages[activeCategory][idx]} alt={item.name} className="product-img" />
  <p className="product-name">{item.name}</p>
  <p className="product-desc">{item.desc}</p>
</motion.div>

                    ))}


                </div>

            </section>

            <section className="about-section" id="about">
                <h2 className="section-title">About Rvibes</h2>
                <p className="about-text">
                    "To be the leader in holistic health, offering innovative and
                    accessible homeopathic, nutraceutical, herbal, and cosmetic
                    solutions that empower individuals to achieve optimal well-
                    being and embrace natural health."
                </p>
            </section>

            <section className="contact-section" id="contact">
                <h2 className="section-title">Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone" required />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <footer className="footer">
                <p>© 2025 Rvibes Homeopathy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
