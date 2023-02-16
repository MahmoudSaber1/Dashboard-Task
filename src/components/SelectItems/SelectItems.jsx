import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { itemData } from "../../common/data";

const SelectItems = () => {
	const { colorValue } = useSelector((state) => state.toggle);

	const dataMaping = itemData.map((item) => (
		<Flex
			backgroundColor={colorValue === item.color ? "#F6F6F6" : "white"}
			p="1"
			borderRadius={"5px"}
			alignItems="center"
			justifyContent={"flex-start"}
			gap="4"
			key={item.id}
			mb="2"
		>
			<Box
				w={"46px"}
				h={"46px"}
				display="flex"
				alignItems={"center"}
				justifyContent="center"
				backgroundColor={"white"}
				borderRadius="5px"
				cursor={"pointer"}
				key={item.color}
			>
				<Box className={`icon ${item.color}`} w={10} h={10} />
			</Box>

			<Select>
				{item.type.map((select) => (
					<React.Fragment key={select.value}>
						<option value={select.value} defaultValue={select.value[1]}>
							{colorValue === item.color
								? item.type[0].label
								: item.type[1].label}
						</option>
					</React.Fragment>
				))}
			</Select>
			<Select>
				{item.colorSelect.map((select) => (
					<React.Fragment key={select.value}>
						<option value={select.value}>
							{colorValue === item.color
								? item.colorSelect[0].label
								: item.colorSelect[1].label}
						</option>
					</React.Fragment>
				))}
			</Select>
			<Box
				border={`1px solid #6B729E `}
				borderRadius={"5px"}
				cursor={"pointer"}
			>
				<Box
					w={"34px"}
					h={"34px"}
					display="flex"
					alignItems={"center"}
					justifyContent="center"
					as="i"
					fontSize={"lg"}
					className="bx bx-link"
				/>
			</Box>
			<Box
				border={`1px solid #6B729E `}
				borderRadius={"5px"}
				cursor={"pointer"}
			>
				<Box
					w={"34px"}
					h={"34px"}
					as="i"
					fontSize={"lg"}
					color={"red.600"}
					className="bx bx-trash"
					display="flex"
					alignItems={"center"}
					justifyContent="center"
				/>
			</Box>
		</Flex>
	));

	return (
		<>
			<Box
				width={"100%"}
				height={"473px"}
				backgroundColor="white"
				boxShadow={`${"var(--box-shadow)"}`}
				borderRadius="10px"
				p={5}
				overflow="auto"
			>
				{dataMaping}
			</Box>
		</>
	);
};

export default SelectItems;
