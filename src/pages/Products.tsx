import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";
import a10 from "../assets/a10.png";
import threec from "../assets/3c.png";
import threem from "../assets/3m.png";
import zf50 from "../assets/zf50.png";
import zf80 from "../assets/zf80.png";
import sf from "../assets/sf.png";
import a20 from "../assets/a20.png";
import zchokar from "../assets/z chokar.png";

const Products = () => {
  useEffect(() => {
    document.title = "Our Products - Data Flour Mills (DFM)";
  }, []);

  // Product categories
  const categories = [
    "All",
    "Wheat Flour",
    "Maida",
    "Semolina",
    "Export Grade",
  ];

  // Product weights for filtering
  const weights = ["All Weights", "1 kg", "5 kg", "10 kg", "25 kg", "50 kg"];

  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWeight, setSelectedWeight] = useState("All Weights");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Product data
  const products = [
    {
      id: 1,
      name: "Premium Chakki Atta",
      description:
        "Stone-ground whole wheat flour for chapatis and rotis with a perfect texture.",
      category: "Wheat Flour",
      weights: ["1 kg", "5 kg", "10 kg"],
      image: a10,
      features: ["Stone Ground", "High Protein", "No Additives"],
      isExportQuality: false,
    },
    {
      id: 2,
      name: "Superfine Maida",
      description:
        "Ultra-refined wheat flour ideal for making naan, cakes, pastries, and cookies.",
      category: "Maida",
      weights: ["1 kg", "5 kg", "25 kg"],
      image: threec,
      features: ["Fine Texture", "Bleached", "Enriched"],
      isExportQuality: false,
    },
    {
      id: 3,
      name: "Premium Suji/Rava",
      description:
        "Coarse wheat semolina perfect for upma, halwa, idli, and other traditional dishes.",
      category: "Semolina",
      weights: ["1 kg", "5 kg"],
      image: threem,
      features: ["Coarse Texture", "High Quality", "No Preservatives"],
      isExportQuality: false,
    },
    {
      id: 4,
      name: "Export Grade Wheat Flour",
      description:
        "Premium quality wheat flour meeting international standards for export markets.",
      category: "Export Grade",
      weights: ["25 kg", "50 kg"],
      image: zf50,
      features: [
        "International Standards",
        "Quality Certified",
        "Premium Packaging",
      ],
      isExportQuality: true,
    },
    {
      id: 5,
      name: "Whole Wheat Flour",
      description:
        "Nutritious whole wheat flour retaining all the goodness of wheat bran and germ.",
      category: "Wheat Flour",
      weights: ["5 kg", "10 kg", "25 kg"],
      image: zf80,
      features: ["100% Whole Grain", "High Fiber", "Nutrient-Rich"],
      isExportQuality: false,
    },
    {
      id: 6,
      name: "Bombay Rawa",
      description:
        "Fine semolina flour ideal for making sweet dishes and savory snacks.",
      category: "Semolina",
      weights: ["1 kg", "5 kg"],
      image: sf,
      features: ["Medium Grain", "Versatile", "Premium Quality"],
      isExportQuality: false,
    },
    {
      id: 7,
      name: "All-Purpose Flour",
      description:
        "Versatile refined flour suitable for a variety of baking and cooking applications.",
      category: "Maida",
      weights: ["1 kg", "5 kg", "10 kg", "25 kg"],
      image: a20,
      features: ["Versatile", "Consistent Quality", "Enhanced with Vitamins"],
      isExportQuality: false,
    },
    {
      id: 8,
      name: "Export Grade Semolina",
      description:
        "High-quality semolina flour meeting export standards for international markets.",
      category: "Export Grade",
      weights: ["25 kg", "50 kg"],
      image: zchokar,
      features: ["Export Certified", "Premium Quality", "Dust-Free"],
      isExportQuality: true,
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
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-primary relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7886583/pexels-photo-7886583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
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
                  className='product-card bg-white rounded-lg shadow-card overflow-hidden transform transition-all hover:shadow-lg relative'
                >
                  {product.isExportQuality && (
                    <span className='absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium z-10'>
                      Export Quality
                    </span>
                  )}
                  <div className='overflow-hidden h-48'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='product-image w-full h-full object-cover transition-transform'
                    />
                  </div>
                  <div className='p-6'>
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

                    <Button
                      variant='outline'
                      href={`/contact?product=${encodeURIComponent(
                        product.name
                      )}`}
                      className='w-full mt-2'
                    >
                      Inquire Now
                    </Button>
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
