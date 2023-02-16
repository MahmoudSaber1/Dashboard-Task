import {
	Avatar,
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import React from "react";

const Account = ({ linkName }) => {
	return (
		<>
			<Menu>
				<MenuButton rounded="md">
					<Flex alignItems={"center"} justifyContent={"center"} gap="2">
						<Avatar size={"sm"} name="test" />
						<Box
							as="i"
							fontSize="xl"
							fontWeight={"bold"}
							className="bx bx-chevron-down"
						/>
					</Flex>
				</MenuButton>

				<MenuList>
					<MenuItem display={"flex"} alignItems="center" gap="2">
						<Avatar size="sm" name={linkName} />
						{linkName}
					</MenuItem>

					<MenuDivider />

					<MenuItem display={"flex"} alignItems="center" gap="2">
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default Account;
