import { Button, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBasket } from "@tabler/icons-react";

export const Header =() => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Group display={{ base: 'flex'}} align="center" justify="space-between">
        <Drawer opened={opened} onClose={close}>
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
      <h1>Garden Pizza</h1>
      <IconBasket />
      </Group>
        </>
    );
}