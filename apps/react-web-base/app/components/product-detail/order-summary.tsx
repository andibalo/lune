
import { Button } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { PlusIcon, MinusIcon } from "lucide-react"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { formatNumberToCurrency } from "~/lib/utils";

export const OrderSummary = (
    { productData = { id: "1", title: "Wireless Headset", description: "Premium noise-cancelling headphones with surround sound technology and high comfort.", price: 98.96, stock: 10 } } = {}
) => {

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="mb-4">Variations</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h5>Color:</h5>
                                <div className="flex gap-2">
                                    <Button variant="outline">
                                        Black
                                    </Button>
                                    <Button variant="outline">
                                        Red
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5>Storage:</h5>
                                <div className="flex gap-2">
                                    <Button variant="outline">
                                        216 GB
                                    </Button>
                                    <Button variant="outline">
                                        512 GB
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="flex items-center max-w-35 gap-2" >
                                    <Button variant="secondary" size="icon" className="size-8 cursor-pointer">
                                        <MinusIcon />
                                    </Button>
                                    <Input type="text" className="text-center" value="1" />
                                    <Button variant="secondary" size="icon" className="size-8 cursor-pointer">
                                        <PlusIcon />
                                    </Button>
                                </div>
                                <Label className="ml-4">Stock: {productData.stock}</Label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between item-center">
                        <p>Subtotal</p>
                        <p>
                            {formatNumberToCurrency(productData.price)}
                        </p>
                    </div>
                </div>


            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Add To Cart
                </Button>
                <Button variant="outline" className="w-full">
                    Buy Now
                </Button>
            </CardFooter>
        </Card>
    )
}