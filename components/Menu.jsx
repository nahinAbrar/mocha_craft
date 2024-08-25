import MenuItem from "./MenuItem"
import Separator from "./Separator"


const menuItems = [
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Expresso",
        description: "Rich and bold shot of coffee",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        description: "Expresso with steamed milk and foam",
        price: 4.5,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        description: "Expresso with steamed milk",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        description: "Rich and bold shot of coffee",
        price: 4.0,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        description: "Mocha Craft Special Coffee",
        price: 5.4,
    },
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Machhiato",
        description: "Expresso with a dollop of foam",
        price: 4.4,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Flat White",
        description: "Expresso with microfoam milk",
        price: 4.25,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Iced Coffee",
        description: "Chilled coffee over ice",
        price: 3.5,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Affogato",
        description: "Expresso shot over vanilla ice cream",
        price: 6.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        description: "Coffe with Irish whiskey and cream",
        price: 7.2,
    },
]

const Menu = () => {
    return (
        <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 mb-12 xl:mb-24">
                    <h2 className="h2 text-center">Our Menu</h2>
                    <div className="mb-4">
                        <Separator bg="accent" />
                    </div>
                    <p className="text-center max-w-[620px] mx-auto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, pariatur. Maxime vero tempore obcaecati, enim facere dignissimos eius. Delectus, perferendis.
                    </p>
                </div>
                {/*menu and button */}
                <div className="flex flex-col items-center gap-12 xl:gap-24">
                    {/*menu*/}
                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                        {menuItems.map((item, index) => {
                            const { name, description, price, imgSrc } = item;
                            return <MenuItem
                                name={name}
                                description={description}
                                price={price}
                                imgSrc={imgSrc}
                                key={index}
                            />
                        })}
                    </div>

                    <button className="btn">View full Menu</button>
                </div>
            </div>
        </section>
    )
}

export default Menu