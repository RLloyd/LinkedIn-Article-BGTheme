// src/pages/Home/Home.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchData, AppData } from "@data/mockData";
import { HomeContainer, ImageDiv, TextDiv } from "./Home.styles";
import bonsai from "@/assets/bonsai.png";
import AnimatedText from "@/components/Animations/AnimatedText";


const Home: React.FC = () => {
	const [data, setData] = useState<AppData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			try {
				const result = await fetchData();
				setData(result);
			} catch (error) {
				console.error("Error loading data:", error);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	if (loading) {
		return (
			<HomeContainer>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               Loading...
            </motion.div>
         </HomeContainer>
		);
	}

	if (!data) {
		return <div>Error loading data</div>;
	}

	return (
		<HomeContainer>
			<AnimatedText>BONSAI</AnimatedText>
			<ImageDiv>
				<img src={bonsai} alt="Bonsai" />
			</ImageDiv>
		</HomeContainer>
	);
};

export default Home;
