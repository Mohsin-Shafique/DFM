import { useEffect, useState } from "react";
import { Search, Filter, X } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";
import zmw from "../assets/5555.png";
import tsm from "../assets/4444.png";
import zf from "../assets/3333.png";
import threec from "../assets/3c.png";
import zf50 from "../assets/zf50.png";
import sf from "../assets/sf.png";
import zchokar from "../assets/z chokar.png";
import Zamindar from "../assets/Zamindar.png";
import chakki from "../assets/chakki.png";
const Products = () => {
  useEffect(() => {
    document.title = "Our Products - Data Flour Mills (DFM)";
  }, []);

  // Product categories
  const categories = ["All", "Wheat Flour", "Maida", "Bran Products"];

  // Product weights for filtering
  const weights = ["All Weights", "1 kg", "5 kg", "10 kg", "25 kg", "50 kg"];

  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWeight, setSelectedWeight] = useState("All Weights");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [modalProduct, setModalProduct] = useState<null | (typeof products)[0]>(
    null
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalProduct) {
        setModalProduct(null);
      }
    };

    if (modalProduct) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [modalProduct]);

  // Product data
  const products = [
    {
      id: 1,
      name: "Zamindar Chakki Atta",
      description:
        "Traditional stone-ground whole wheat flour perfect for making soft chapatis and rotis with authentic taste and texture.",
      category: "Wheat Flour",
      weights: ["5 kg"],
      image: chakki,
      features: [
        "Stone Ground",
        "High Protein",
        "No Additives",
        "Traditional Method",
      ],
      isExportQuality: false,
    },
    {
      id: 2,
      name: "Zamindar Whole Wheat Flour",
      description:
        "Premium quality whole wheat flour for chapatis and rotis with enhanced nutritional value.",
      category: "Wheat Flour",
      weights: ["10 kg", "20 kg"],
      image: zmw,
      features: ["Premium Quality", "High Protein", "No Additives"],
      isExportQuality: false,
    },
    {
      id: 3,
      name: "Teen Sher Maida",
      description:
        "High-quality refined wheat flour ideal for making naan, cakes, pastries, and cookies with perfect consistency.",
      category: "Maida",
      weights: ["50 kg", "80 kg"],
      image: tsm,
      features: [
        "Fine Texture",
        "High Quality",
        "Consistent Results",
        "Perfect for Baking",
      ],
      isExportQuality: false,
    },
    {
      id: 4,
      name: "Zamindar Maida",
      description:
        "Premium refined wheat flour perfect for baking and cooking applications with excellent texture and taste.",
      category: "Maida",
      weights: ["50 kg", "80 kg"],
      image: Zamindar,
      features: [
        "Premium Quality",
        "Fine Texture",
        "Versatile",
        "Consistent",
        "Perfect for Delicate Baking",
      ],
      isExportQuality: false,
    },
    {
      id: 5,
      name: "Teen Sher Fine",
      description:
        "Fine quality wheat flour specially processed for making biscuits, Naan, and other baked goods.",
      category: "Maida",
      weights: ["50 kg", "80 kg"],
      image: zf50,
      features: [
        "Fine Texture",
        "Premium Quality",
        "Perfect for Baking",
        "Perfect for Naan",
        "Consistent",
      ],
      isExportQuality: false,
    },
    {
      id: 6,
      name: "Zamindar Fine",
      description:
        "Premium fine wheat flour ideal for making high-quality baked goods with excellent texture and taste.",
      category: "Maida",
      weights: ["50 kg", "80 kg"],
      image: zf,
      features: [
        "Premium Quality",
        "Fine Texture",
        "Excellent for Baking",
        "Consistent",
      ],
      isExportQuality: false,
    },
    {
      id: 7,
      name: "Zamindar Super Fine",
      description:
        "Ultra-fine wheat flour perfect for making delicate tortillas and premium baked goods with exceptional texture.",
      category: "Maida",
      weights: ["15 kg"],
      image: sf,
      features: ["Super Fine", "Premium Quality", "Exceptional Texture,"],
      isExportQuality: false,
    },
    {
      id: 8,
      name: "Teen Sher Chokhar (Bran)",
      description:
        "High-quality wheat bran rich in fiber and nutrients, perfect for adding nutritional value to various food products and animal feeds.",
      category: "Bran Products",
      weights: ["34 kg"],
      image: threec,
      features: [
        "High Fiber",
        "Nutrient-Rich",
        "Natural",
        "Versatile",
        "Animal Feed",
      ],
      isExportQuality: false,
    },
    {
      id: 9,
      name: "Zamindar Chokhar (Bran)",
      description:
        "High-quality wheat bran rich in fiber and nutrients, perfect for adding nutritional value to various food products and animal feeds.",
      category: "Bran Products",
      weights: ["34 kg"],
      image: zchokar,
      features: [
        "Premium Quality",
        "High Fiber",
        "Nutrient-Rich",
        "Animal Feed",
        "Natural",
      ],
      isExportQuality: false,
    },
  ];

  // Filtered products based on category, weight, and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesWeight =
      selectedWeight === "All Weights" ||
      product.weights.includes(selectedWeight);
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesWeight && matchesSearch;
  });

  return (
    <>
      {/* Product Modal */}
      {modalProduct && (
        <div
          className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center'
          onClick={() => setModalProduct(null)}
        >
          <div
            className='bg-white rounded-lg shadow-lg max-w-sm w-full p-4 relative animate-fadeIn'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className='absolute top-3 right-3 text-gray-500 hover:text-secondary hover:bg-gray-100 rounded-full p-1 transition-colors z-10'
              onClick={() => setModalProduct(null)}
              aria-label='Close'
            >
              <X size={28} />
            </button>
            <div className='flex flex-col items-center'>
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className='w-64 h-64 object-contain mb-3 transition-transform duration-300'
              />
              <h2 className='text-xl font-bold text-primary mb-2 text-center'>
                {modalProduct.name}
              </h2>
              <p className='text-gray-700 mb-3 text-center text-sm'>
                {modalProduct.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-3 justify-center'>
                {modalProduct.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs'
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className='mb-3 text-center'>
                <h4 className='text-sm font-medium text-gray-700 mb-1'>
                  Available Weights:
                </h4>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {modalProduct.weights.map((weight, idx) => (
                    <span
                      key={idx}
                      className='bg-secondary/20 text-primary-dark px-2 py-1 rounded-full text-xs font-medium'
                    >
                      {weight}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant='outline'
                href={`/contact?product=${encodeURIComponent(
                  modalProduct.name
                )}`}
                className='w-full mt-2'
              >
                Inquire Now
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-primary relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90'></div>

        <div className='container-custom relative z-10 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our Products
          </h1>
          <p className='text-xl text-white/90 max-w-3xl mx-auto'>
            Discover our premium range of flour products crafted with the finest
            wheat grains.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className='section-padding bg-gray-50'>
        <div className='container-custom'>
          <div className='mb-10'>
            {/* Search and Filter Bar */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mb-8'>
              <div className='relative w-full md:w-1/3'>
                <input
                  type='text'
                  placeholder='Search products...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
                <Search
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={18}
                />
              </div>

              <div className='flex items-center space-x-2 w-full md:w-auto'>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className='flex items-center px-4 py-2 border rounded-md bg-white hover:bg-gray-50 transition-colors'
                >
                  <Filter size={18} className='mr-2 text-primary' />
                  <span>Filters</span>
                </button>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className='px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className='bg-white p-4 rounded-md shadow-sm mb-6 animate-slideUp'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <h3 className='font-medium mb-2 text-primary'>
                      Categories
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedCategory === category
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='font-medium mb-2 text-primary'>Weights</h3>
                    <div className='flex flex-wrap gap-2'>
                      {weights.map((weight) => (
                        <button
                          key={weight}
                          onClick={() => setSelectedWeight(weight)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedWeight === weight
                              ? "bg-secondary text-primary-dark"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {weight}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className='product-card bg-white rounded-lg shadow-card overflow-hidden transform transition-all hover:shadow-lg relative flex flex-col'
                >
                  {product.isExportQuality && (
                    <span className='absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium z-10'>
                      Export Quality
                    </span>
                  )}
                  <div
                    className='overflow-hidden h-64 flex items-center justify-center bg-white'
                    onClick={() => setModalProduct(product)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className='product-image w-full h-full object-contain p-2 transition-transform hover:scale-105 duration-300'
                    />
                  </div>
                  <div className='p-6 flex flex-col flex-grow'>
                    <h3 className='text-xl font-bold text-primary mb-2'>
                      {product.name}
                    </h3>
                    <p className='text-gray-600 mb-4 text-sm'>
                      {product.description}
                    </p>

                    {/* Product Features */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Available Weights */}
                    <div className='mb-4'>
                      <h4 className='text-sm font-medium text-gray-700 mb-1'>
                        Available Weights:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {product.weights.map((weight, index) => (
                          <span
                            key={index}
                            className='bg-secondary/20 text-primary-dark px-2 py-1 rounded-full text-xs font-medium'
                          >
                            {weight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='mt-auto'>
                      <Button
                        variant='outline'
                        href={`/contact?product=${encodeURIComponent(
                          product.name
                        )}`}
                        className='w-full'
                      >
                        Inquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <h3 className='text-xl font-medium text-gray-700 mb-2'>
                No products found
              </h3>
              <p className='text-gray-500 mb-6'>
                Try adjusting your search criteria or filters.
              </p>
              <Button
                variant='primary'
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedWeight("All Weights");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Info Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <SectionHeading
            title='Quality Assurance'
            subtitle='Our commitment to quality is reflected in every bag of flour we produce.'
            centered
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Premium Ingredients
              </h3>
              <p className='text-gray-700 mb-4'>
                We source the highest quality wheat grains from select farmers,
                ensuring that every batch of flour meets our exacting standards.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Carefully selected wheat varieties</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Consistent grain quality</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Regular supplier audits</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Advanced Milling
              </h3>
              <p className='text-gray-700 mb-4'>
                Our state-of-the-art milling technology ensures consistent
                texture, color, and quality in every batch of flour we produce.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Modern milling equipment</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Precision grinding control</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Automated quality monitoring</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Rigorous Testing
              </h3>
              <p className='text-gray-700 mb-4'>
                Each batch undergoes comprehensive testing to ensure it meets
                our high standards before being approved for packaging.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Multiple quality checkpoints</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Laboratory analysis</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Sensory evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-secondary/10'>
        <div className='container-custom text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-6'>
            Need Custom Flour Solutions?
          </h2>
          <p className='text-lg text-gray-700 mb-8 max-w-3xl mx-auto'>
            We offer custom milling services for businesses with specific
            requirements. Contact us to discuss your needs.
          </p>
          <Button href='/contact' variant='primary' size='lg'>
            Contact Our Sales Team
          </Button>
        </div>
      </section>
    </>
  );
};

export default Products;
