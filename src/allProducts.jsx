import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { NavBar } from "./components/navBar.jsx"; 
import { Footer } from "./components/footer.jsx"; 
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, PlusIcon, MinusIcon, FunnelIcon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Price: Low to High', value: 'priceLowToHigh' },
  { name: 'Price: High to Low', value: 'priceHighToLow' },
  { name: 'Most Popular', value: 'mostPopular' },
  { name: 'Latest', value: 'latest' },
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'chaussures', label: 'Shoes' },
      { value: 'vêtements', label: 'Clothing' },
      { value: 'accessoires', label: 'Accessories' },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'red', label: 'Red' },
    ],
  },
];

const sizeOptions = {
  chaussures: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
  vêtements: ['S', 'M', 'L', 'XL'],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({ category: null, color: null });
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category');

  useEffect(() => {
    fetch('https://my-api-heroku-b0d23b24e1c6.herokuapp.com/produits')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        if (initialCategory) {
          setSelectedOptions((prev) => ({
            ...prev,
            category: initialCategory,
          }));
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des produits :', error));
  }, [initialCategory]);

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchCategory = selectedOptions.category ? product.category === selectedOptions.category : true;
      const matchColor = selectedOptions.color ? product.colors[selectedOptions.color] === true : true;
      const matchSize = selectedSizes.length > 0 ? product.sizes.some((size) => selectedSizes.includes(size)) : true;
      return matchCategory && matchColor && matchSize;
    });

    filtered = filtered.sort((a, b) => {
      if (sortCriteria === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (sortCriteria === 'priceHighToLow') {
        return b.price - a.price;
      } else if (sortCriteria === 'mostPopular') {
        return b.mostPopular - a.mostPopular;
      } else if (sortCriteria === 'latest') {
        return b.latest - a.latest;
      }
      return 0;
    });

    setFilteredProducts(filtered);
  }, [selectedOptions, selectedSizes, products, sortCriteria]);

  const handleSortChange = (sortValue) => {
    setSortCriteria(sortValue);
  };

  const handleOptionChange = (filterType, value) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [filterType]: prevSelectedOptions[filterType] === value ? null : value,
    }));
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const getSizeOptionsForCategory = () => {
    if (selectedOptions.category === 'chaussures') {
      return sizeOptions.chaussures;
    } else if (selectedOptions.category === 'vêtements') {
      return sizeOptions.vêtements;
    }
    return [];
  };

  return (
    <>
      <NavBar /> 
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-6 mb-8 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Our Products</h1>
          <div className="flex items-center">
            <Squares2X2Icon className="hidden lg:block h-6 w-6 text-gray-400 mr-4" aria-hidden="true" />
            <button
              type="button"
              className="lg:hidden p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <Menu as="div" className="relative inline-block text-left mr-4">
              <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem as="div" key={option.value}>
                      {({ active }) => (
                        <button
                          onClick={() => handleSortChange(option.value)}
                          className={classNames(
                            option.value === sortCriteria ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>

        <div className="lg:flex lg:space-x-8">
          <aside className="hidden lg:block lg:w-1/4 p-4">
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className={section.id === 'category' ? 'px-4 py-6' : 'border-t border-gray-200 px-4 py-6'}>
                  <DisclosureButton className="flex justify-between w-full text-gray-900 py-3">
                    <span>{section.name}</span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon className="h-5 w-5 group-open:hidden" />
                      <MinusIcon className="h-5 w-5 hidden group-open:block" />
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <div
                            className={classNames(
                              selectedOptions[section.id] === option.value ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-900',
                              'h-6 w-6 flex items-center justify-center rounded-md cursor-pointer'
                            )}
                            onClick={() => handleOptionChange(section.id, option.value)}
                          >
                            {selectedOptions[section.id] === option.value && <CheckIcon className="h-4 w-4 text-white" />}
                          </div>
                          <label className="ml-3 text-sm text-gray-600">{option.label}</label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}

              {selectedOptions.category && selectedOptions.category !== 'accessoires' && (
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  <DisclosureButton className="flex justify-between w-full text-gray-900 py-3">
                    <span>Size</span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon className="h-5 w-5 group-open:hidden" />
                      <MinusIcon className="h-5 w-5 hidden group-open:block" />
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {getSizeOptionsForCategory().map((size) => (
                        <div key={size} className="flex items-center">
                          <div
                            className={classNames(
                              selectedSizes.includes(size) ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-900',
                              'h-6 w-6 flex items-center justify-center rounded-md cursor-pointer'
                            )}
                            onClick={() => handleSizeChange(size)}
                          >
                            {selectedSizes.includes(size) && <CheckIcon className="h-4 w-4 text-white" />}
                          </div>
                          <label className="ml-3 text-sm text-gray-600">{size}</label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              )}
            </form>
          </aside>

          <div className="flex-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product._id} className="group relative">
                <Link to={`/product/${product._id}`}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${product._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    {/* La catégorie a été supprimée ici */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile filters dialog */}
      <Transition.Root show={mobileFiltersOpen} as={React.Fragment}>
  <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
    <Transition.Child
      as={React.Fragment}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 z-40 flex justify-end">  {/* Ajustement ici pour aligner la sidebar à droite */}
      <Transition.Child
        as={React.Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              className="p-2 -m-2 text-gray-400 hover:text-gray-500"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile filter form */}
          <form className="mt-4">
            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className={section.id === 'category' ? 'px-4 py-6' : 'border-t border-gray-200 px-4 py-6'}>
                <DisclosureButton className="flex justify-between w-full text-gray-900 py-3">
                  <span>{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon className="h-5 w-5 group-open:hidden" />
                    <MinusIcon className="h-5 w-5 hidden group-open:block" />
                  </span>
                </DisclosureButton>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <div
                          className={classNames(
                            selectedOptions[section.id] === option.value ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-900',
                            'h-6 w-6 flex items-center justify-center rounded-md cursor-pointer'
                          )}
                          onClick={() => handleOptionChange(section.id, option.value)}
                        >
                          {selectedOptions[section.id] === option.value && <CheckIcon className="h-4 w-4 text-white" />}
                        </div>
                        <label className="ml-3 text-sm text-gray-600">{option.label}</label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}

            {selectedOptions.category && selectedOptions.category !== 'accessoires' && (
              <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                <DisclosureButton className="flex justify-between w-full text-gray-900 py-3">
                  <span>Size</span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon className="h-5 w-5 group-open:hidden" />
                    <MinusIcon className="h-5 w-5 hidden group-open:block" />
                  </span>
                </DisclosureButton>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                    {getSizeOptionsForCategory().map((size) => (
                      <div key={size} className="flex items-center">
                        <div
                          className={classNames(
                            selectedSizes.includes(size) ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-900',
                            'h-6 w-6 flex items-center justify-center rounded-md cursor-pointer'
                          )}
                          onClick={() => handleSizeChange(size)}
                        >
                          {selectedSizes.includes(size) && <CheckIcon className="h-4 w-4 text-white" />}
                        </div>
                        <label className="ml-3 text-sm text-gray-600">{size}</label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            )}
          </form>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </Dialog>
</Transition.Root>

      <Footer />
    </>
  );
};

export default AllProducts;
