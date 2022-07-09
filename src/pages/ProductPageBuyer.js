import Deskripsi from '../components/Deskripsi';
import DeskripsiHarga from '../components/DeskripsiHarga'
import ProfilSeller from "../components/ProfilSeller";
import Carousel from '../components/Carousel';

const ProductPageBuyer = () => {	
	return (
		<div>
			<div
				className="flex flex-1 ml-[120px] mobile:flex-col mobile:relative mobile:mt-3 mobile:p-2 mobile:-ml-[15px]">
				<Carousel />
				<div
					className="flex flex-1 items-center mobile:absolute justify-items-center flex-col mt-10 shadow-around mobile:items-center ml-5 ">
					<DeskripsiHarga />
					<div>
						<ProfilSeller />
					</div>
				</div>
			</div>
			<div className="flex flex-1 justify-between">
				<Deskripsi />
			</div>
		</div>
	);
}

export default ProductPageBuyer