import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Filter, Preview, SelectItems } from "../components";

const UploadImage = () => {
	return (
		<>
			<Flex
				py="8"
				px="12"
				w={"100%"}
				justifyContent="center"
				gap="10"
				flexDirection={["column", "column", "row"]}
			>
				<Box>
					<Preview />
				</Box>
				<Flex flexDirection={"column"} gap="5" w={"617px"}>
					<Filter />
					<SelectItems />
				</Flex>
			</Flex>
		</>
	);
};

export default UploadImage;
