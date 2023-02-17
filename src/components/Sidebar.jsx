import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleClass } from "../store/LightboxSlices/Toggle";
import { icon } from "../assets";

import { SidebarLinks } from "../common/data";

const Sidebar = () => {
	const textColor = `${"var(--txt-white)"}`;

	const dispatch = useDispatch();
	const { value } = useSelector((state) => state.toggle);

	const getNavigate = SidebarLinks.map((links) => (
		<React.Fragment key={links.id}>
			<Text
				as="span"
				position={"relative"}
				display="block"
				padding={"0 10px"}
				height="50px"
				w="100%"
				lineHeight={"50px"}
				fontSize={["sm", "sm", "sm"]}
				fontWeight="300"
				whiteSpace="nowrap"
			>
				{links.name}
			</Text>
			{links.linksItem.map((link) => (
				<Box
					key={link.name}
					as="li"
					position={"relative"}
					width="100%"
					mb="2"
					px="1"
				>
					<NavLink to={link.link} className="linkItem" end>
						<Text
							as="span"
							position={"relative"}
							display="block"
							minW="55px"
							h="50px"
							lineHeight={"55px"}
							textAlign="center"
						>
							<Box as="i" className={link.icon} />
						</Text>
						<Text
							as="span"
							position={"relative"}
							display="block"
							height="50px"
							w="100%"
							lineHeight={"50px"}
							whiteSpace="nowrap"
						>
							<Text>{link.name}</Text>
						</Text>
					</NavLink>
				</Box>
			))}
		</React.Fragment>
	));

	return (
		<>
			<Box
				position={"fixed"}
				w={value ? "60px" : "260px"}
				height={"100%"}
				backgroundColor={textColor}
				transition={"0.4s"}
				overflow="hidden"
				className={value ? "side active" : "side"}
				zIndex="99"
			>
				<Box as="ul" position={"absolute"} top="0" left={0} width="100%">
					<Box
						as="li"
						position={"relative"}
						width="100%"
						mb="4"
						display={"flex"}
						alignItems="center"
					>
						<Link to={"/"} className="linkItem logo">
							<Text
								as="span"
								position={"relative"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
								minW="64px"
								h="60px"
								textAlign="center"
							>
								<Image src={icon.logo} />
							</Text>
							<Text
								as="span"
								position={"relative"}
								display="flex"
								alignItems={"center"}
								justifyContent="center"
								fontSize={["md", "lg", "xl"]}
								color={"black !important"}
								_hover={{
									color: "black !important",
								}}
								fontWeight="bold"
								whiteSpace="nowrap"
							>
								<Text>Lightbox</Text>
							</Text>
						</Link>
						<Flex
							alignItems={"center"}
							justifyContent="center"
							w="60px"
							h={"60px"}
							position="relative"
							cursor={"pointer"}
							display={["flex", "flex", "flex", "none"]}
							onClick={() => dispatch(toggleClass())}
						>
							<Box
								as="i"
								fontSize={"24px"}
								color={"black"}
								className="bx bx-x"
							></Box>
						</Flex>
					</Box>
					{getNavigate}
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
