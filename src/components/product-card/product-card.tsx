import { useState } from 'react';
import { Card, Text, Button, Image, Group } from '@mantine/core';

const ProductCard = ({ item }: { item: any }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
  };

  return (
    <Card shadow="sm" padding="lg" style={{ marginTop: 10, width: 250 }}>
      <Card.Section>
        <Image
          src={`/${item.toLowerCase().replace(/\s/g, '-')}.jpg`}
          height={160}
          alt={item}
        />
      </Card.Section>
      <Text w={500} style={{ marginTop: 10 }}>
        {item}
      </Text>
      <Group justify='space-between' style={{ marginTop: 14 }}>
        {!inCart ? (
          <Button variant="light" color="blue" fullWidth onClick={handleAddToCart}>
            Add to Cart
          </Button>
        ) : (
          <Button variant="outline" color="red" fullWidth onClick={handleRemoveFromCart}>
            Remove from Cart
          </Button>
        )}
      </Group>
    </Card>
  );
};

export default ProductCard;
