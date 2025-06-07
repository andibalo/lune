
import { StarRating } from "~/components/ui/star-rating";
import { Button } from "~/components/ui/button";
import { formatNumberToCurrency } from "~/lib/utils";
import { Link } from "react-router";

const DEFAULT_IMAGE_URL =
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCardProps {
    id?: string
    imageUrl?: string;
    discount?: string | null;
    title?: string;
    description?: string;
    price?: number;
    rating?: number;
    reviewCount?: number;
    onAddToCart?: () => void;
    onBuyNow?: () => void;
    freeShipping?: boolean;
}

export const ProductCard = ({
    id = "1",
    description = "Premium noise-cancelling headphones with surround sound technology and high comfort",
    discount = "20% OFF",
    freeShipping = true,
    imageUrl = DEFAULT_IMAGE_URL,
    onAddToCart = () => { },
    onBuyNow = () => { },
    price = 98.96,
    rating = 4.7,
    reviewCount = 65,
    title = "Wireless headset",
}: ProductCardProps = {}) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="cursor-pointer group relative flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 p-5 dark:from-sky-950/30 dark:to-blue-950/30">
                    {discount && (
                        <div className="absolute top-3 left-3 z-10">
                            <span className="relative inline-block rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                                {discount}
                            </span>
                        </div>
                    )}
                    <div className="transition-transform duration-500 group-hover:scale-105">
                        <img
                            src={imageUrl}
                            className="rounded-lg object-contain h-[200px] mx-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                        <h3 className="mb-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                        </h3>
                        <div className="mb-2 flex items-center">
                            <StarRating
                                value={rating}
                                maxStars={5}
                                readOnly
                                iconSize={16}
                            />
                            <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">
                                {rating} ({reviewCount} reviews)
                            </span>
                        </div>

                        <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                    <div className="mt-auto flex flex-col">
                        <p className="text-2xl font-bold text-sky-700 dark:text-sky-400">{formatNumberToCurrency(price)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}