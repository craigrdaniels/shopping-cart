import {
  writeShoppingCart,
  readShoppingCart,
} from "../components/handlers/localStorage";

const testCart = [
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
];

jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");

describe("test localStorage", () => {
  it("write method sets items to localStorage", () => {
    writeShoppingCart(testCart);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toBeCalledWith(
      "shoppingCart",
      JSON.stringify(testCart)
    );
  });

  it("read metion should get items from localStorage", () => {
    const testReadCart = readShoppingCart();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
