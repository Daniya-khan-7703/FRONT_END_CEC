const spices = [
 { name: "Turmeric", img: "\src\assets\turmeric.jpg" },
 { name: "Red Chilli", img: "\src\assets\red_chiili.jpeg" },
 { name: "Cumin Seeds", img: "\src\assets\cumin.jpeg" },
 { name: "coriander", img: "\src\assets\coriander.webp" },
];


const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
           <img src={spice.img} alt={spice.name} />
           <h3>{spice.name}</h3>
           <p>Pure and fresh spices directly from the source.</p>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Products;
