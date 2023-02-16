import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeColor } from "../../store/LightboxSlices/Toggle";

import { maskColors } from "../../common/data";

const Preview = () => {
	// Despatch changeColor
	const dispatch = useDispatch();

	const [currentColor, setcurrentColor] = useState("");
	const [getIndex, setGetIndex] = useState("");

	const getColor = (e) => {
		setcurrentColor(e.target.className.split(" ").slice(1, 2).join(""));
		setGetIndex(parseInt(e.target.id));
		dispatch(changeColor(e.target.className.split(" ").slice(1, 2).join("")));
	};

	const maskColorsHandel = maskColors.map((item) => (
		<Box
			w={"56px"}
			h={"56px"}
			display="flex"
			alignItems={"center"}
			justifyContent="center"
			backgroundColor={currentColor === item.color ? "white" : "#F6F6F6"}
			borderRadius="5px"
			cursor={"pointer"}
			border={currentColor === item.color ? "1px solid #666E80" : ""}
			key={item.id}
		>
			<Box
				onClick={(e) => getColor(e)}
				id={item.id}
				className={`icon ${item.color}`}
				w={10}
				h={10}
			/>
		</Box>
	));

	return (
		<>
			<Box
				width={["100%", "100%", "300px"]}
				backgroundColor="white"
				boxShadow={`${"var(--box-shadow)"}`}
				borderRadius="10px"
			>
				<Box
					w={"100%"}
					height="205px"
					backgroundColor="#E6E7EE"
					display={"flex"}
					alignItems="center"
					justifyContent={"center"}
					borderRadius="10px 10px 0 0"
				>
					<Box
						className={
							currentColor ? `icon ${currentColor}` : "icon icon-white"
						}
					/>
				</Box>
				<Flex
					w="100%"
					justifyContent={"center"}
					alignItems="center"
					gap="10"
					p="5"
				>
					<Text color={"black"} fontSize={["md", "md", "md"]} fontWeight="500">
						SR23 - BOSS Black Menswear
					</Text>
					<Flex
						justifyContent={"center"}
						alignItems="center"
						border={"1px solid #666E80"}
						borderRadius={"5px"}
						p="1"
						gap="2"
					>
						<Box as="i" className="bx bx-image" />
						<Text as="span" fontSize={"12px"}>
							{getIndex ? getIndex : 0}/{maskColors.length}
						</Text>
					</Flex>
				</Flex>
				<Flex
					w={"100%"}
					flexWrap="wrap"
					gap="3"
					alignItems={"center"}
					justifyContent="center"
				>
					{maskColorsHandel}
				</Flex>
				<Box p="5">
					<Button w={"100%"} colorScheme="facebook">
						{" "}
						+ Add More
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Preview;
