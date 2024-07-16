
import { Tabs, rem } from '@mantine/core';
import { IconSoup, IconPizza, IconIceCream, IconCoffee } from '@tabler/icons-react';
import ProductCard from '../components/product-card/product-card';
export const Home = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

  const categories = [
    {
      label: 'Appetizers',
      icon: <IconSoup style={iconStyle} />,
      items: ['Bruschetta', 'Stuffed Mushrooms', 'Garlic Bread']
    },
    {
      label: 'Main Courses',
      icon: <IconPizza style={iconStyle} />,
      items: ['Grilled Salmon', 'Ribeye Steak', 'Chicken Parmesan']
    },
    {
      label: 'Desserts',
      icon: <IconIceCream style={iconStyle} />,
      items: ['Cheesecake', 'Chocolate Lava Cake', 'Tiramisu']
    },
    {
      label: 'Drinks',
      icon: <IconCoffee style={iconStyle} />,
      items: ['Margarita', 'Old Fashioned', 'Lemonade']
    },
    {
      label: 'Appetizers',
      icon: <IconSoup style={iconStyle} />,
      items: ['Bruschetta', 'Stuffed Mushrooms', 'Garlic Bread']
    },
    {
      label: 'Main Courses',
      icon: <IconPizza style={iconStyle} />,
      items: ['Grilled Salmon', 'Ribeye Steak', 'Chicken Parmesan']
    },
    {
      label: 'Desserts',
      icon: <IconIceCream style={iconStyle} />,
      items: ['Cheesecake', 'Chocolate Lava Cake', 'Tiramisu']
    },
    {
      label: 'Drinks',
      icon: <IconCoffee style={iconStyle} />,
      items: ['Margarita', 'Old Fashioned', 'Lemonade']
    }
  ];

    return (
        <Tabs defaultValue="appetizers" >
        <Tabs.List style={{ display: 'flex', overflowX: 'auto', gap: 4 }}>
          {categories.map((category) => (
            <Tabs.Tab key={category.label} value={category.label.toLowerCase()} leftSection={category.icon}>
              {category.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
  
        {categories.map((category) => (
          <Tabs.Panel key={category.label} value={category.label.toLowerCase()}>
            {category.items.map((item, index) => (
            <ProductCard item={item} key={index}/>
            ))}
          </Tabs.Panel>
        ))}
      </Tabs>
    )
            };