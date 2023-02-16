import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { options, branOption } from "../../common/data";

const Filter = () => {
	const [multipleSelect, setMultipleSelect] = useState();

	const animatedComponents = makeAnimated();

	return (
		<>
			<Box
				width={"100%"}
				backgroundColor="white"
				boxShadow={`${"var(--box-shadow)"}`}
				borderRadius="10px"
				p="4"
			>
				<Flex alignItems="center" gap={"5"}>
					<Flex justifyContent="center" alignItems="center" gap={"2"}>
						<Box as="i" fontSize={"2xl"} className="bx bx-filter" />
						<Box as="span" fontSize={"xl"}>
							Filter
						</Box>
					</Flex>
					{/* Select Input */}
					<Select
						options={options}
						className="selected"
						defaultValue={[options[0]]}
					/>
					{/* Multi Select */}
					<Select
						closeMenuOnSelect={false}
						components={animatedComponents}
						isMulti
						options={branOption}
						onChange={(e) => setMultipleSelect(e)}
					/>
				</Flex>
				{multipleSelect && (
					<Flex
						backgroundColor={"#F6F6F6"}
						borderRadius="10px"
						py="2"
						mt="3"
						px="4"
						gap="2"
					>
						{multipleSelect?.map((select) => (
							<Box
								backgroundColor={"#626262"}
								color="white"
								borderRadius="5px"
								fontSize={"sm"}
								fontWeight={"bold"}
								py="1"
								px="2"
								key={select.value}
							>
								{select.label}
							</Box>
						))}
					</Flex>
				)}
			</Box>
		</>
	);
};

export default Filter;
