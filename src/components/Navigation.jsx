import { Image, Flex, VStack, Button } from "@chakra-ui/react";

import React from "react";

import { useDispatch } from "react-redux";
import { toggleClass } from "../store/LightboxSlices/Toggle";
import { icon } from "../assets";
import Account from "./Account";

const Navigation = ({ value }) => {
	const textColor = `${"var(--txt-white)"}`;
	const dispatch = useDispatch();

	return (
		<header>
			<VStack
				width="100%"
				height="60px"
				alignItems={"center"}
				backgroundColor={textColor}
				justifyContent={
					value
						? ["flex-end", "flex-end", "flex-end", "space-between"]
						: "space-between"
				}
				flexDirection="row"
			>
				<Flex
					alignItems={"center"}
					justifyContent="center"
					w="60px"
					h={"60px"}
					position="relative"
					cursor={"pointer"}
					display={
						value
							? ["none", "none", "none", "flex"]
							: ["flex", "flex", "flex", "flex"]
					}
					onClick={() => dispatch(toggleClass())}
				>
					<Image src={icon.vector} />
				</Flex>
				<Flex
					m="0 !important"
					gap="5"
					justifyContent="center"
					alignItems={"center"}
				>
					<Button
						colorScheme={"whiteAlpha"}
						variant="outline"
						color={"black"}
						size="sm"
					>
						+ New Order
					</Button>
					<Account linkName={"Dashboard"} />
				</Flex>
			</VStack>
		</header>
	);
};

export default Navigation;
