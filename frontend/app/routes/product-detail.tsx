import { Navbar } from "~/components/common/navbar";
import { OrderSummary } from "~/components/product-detail/order-summary";
import { ImageCarousel, type CarouselImages } from "~/components/ui/image-carousel";
import { StarRating } from "~/components/ui/star-rating";


const images: CarouselImages = [
    {
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-01.jpg",
    },
    {

        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg",
    },
    {

        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-filter-01.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-cups-01.jpg",
    },
];

const productData = {
    id: "1",
    title: "Wireless Headset",
    description: "Premium noise-cancelling headphones with surround sound technology and high comfort.",
    price: 98.96,
    rating: 4.7,
    reviewCount: 65,
    images: images,
    stock: 10,
}


export default function ProductDetail() {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <Navbar />
            <div className="container mx-auto py-8">
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                    <div className="flex-2">
                        <h2>Product name</h2>
                        <div className="mb-2 flex items-center">
                            <StarRating
                                value={productData.rating}
                                maxStars={5}
                                readOnly
                                iconSize={16}
                            />
                            <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">
                                {productData.rating} ({productData.reviewCount} reviews)
                            </span>
                        </div>
                        <ImageCarousel
                            images={images}
                            imageFit="contain"
                        />
                        <div>
                            <h3>Description</h3>
                            <p>
                                {productData.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <OrderSummary />
                    </div>
                </div>

            </div>
        </div>
    )
}
