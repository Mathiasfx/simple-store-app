"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import logo from "./assets/logo.png";

//Cambiar por excel google mas adelante
const products = [
  {
    id: 1,
    name: "Tommy Hilfiger",
    price: 51000,
    promoPrice: null,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%202.png?alt=media&token=c3758d93-da7a-4ffa-a692-f28263e5c2f5",
    description:
      "Una fragancia fresca y enérgica que combina notas de frutas como la manzana y grosella negra con flores como camelia. Las notas de fondo incluyen sándalo y cedro, dándole un toque sofisticado. Ideal para el día a día y para quienes buscan un estilo juvenil y natural​",
  },
  {
    id: 2,
    name: "Hugo Boss ICED",
    price: 47500,
    promoPrice: null,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%204.png?alt=media&token=c65d5ad6-746b-4f1b-8abe-fe66d70d2418",
    description:
      "Un perfume vibrante y revitalizante que destaca por sus notas frescas y energizantes de menta, mezcladas con un fondo masculino de vetiver y notas amaderadas.",
  },
  {
    id: 3,
    name: "Kenso Amour - Indian Holi",
    price: 52000,
    promoPrice: 45000,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLAS%201%20copia%206.png?alt=media&token=1df41e85-0ac5-4a93-bcaf-55c972ac9ee0",
    description:
      "Inspirado en la celebración de los colores, este perfume captura la alegría de vivir con notas exóticas de arroz, flor de cerezo y vainilla. Es una fragancia dulce, cálida y sensual.",
  },
  {
    id: 4,
    name: "Versase Versense",
    price: 63000,
    promoPrice: 50000,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLAS%201%20copia%2011.png?alt=media&token=453b972c-8e04-4de9-af5f-accaf23aec2b",
    description:
      "Un perfume fresco y floral que equilibra cítricos con notas de madera, como el sándalo y el cedro. Perfecto para quienes buscan una fragancia moderna y natural.",
  },
  {
    id: 5,
    name: "Nina Ricci Bella",
    price: 48000,
    promoPrice: 37600,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLAS%201%20copia%207.png?alt=media&token=6a552c78-a70b-45d6-a4e2-ac46f5f96de3",
    description:
      "Una fragancia juvenil y juguetona, con notas frutales y dulces de mandarina verde, ruibarbo y vainilla. Es vibrante, ideal para quienes buscan un perfume femenino y alegre.",
  },
  {
    id: 6,
    name: "Versase Man",
    price: 51000,
    promoPrice: null,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%205.png?alt=media&token=a9e8a15e-b941-4edb-91c0-acb6b40c42ab",
    description:
      "Una fragancia sofisticada con un equilibrio entre lo fresco y lo oriental. Combina notas frescas de cítricos con un corazón de especias y un fondo amaderado.",
  },
  {
    id: 7,
    name: "L'eau D'issey Pour Homme",
    price: 58000,
    promoPrice: 52000,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%203.png?alt=media&token=17bebf70-a7e6-4409-b4c0-86450f767943",
    description:
      "Un perfume fresco y acuático con notas cítricas y amaderadas. Destaca por su frescura prolongada y es ideal para el uso diario.",
  },
  {
    id: 8,
    name: "Azzaro Pour Homme",
    price: 55000,
    promoPrice: 48000,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%206.png?alt=media&token=41a087e0-7693-4484-87ff-75d3f5daad97",
    description:
      "Un clásico masculino que mezcla la lavanda y la albahaca con un fondo amaderado, resultando en una fragancia intensa, aromática y sofisticada.",
  },
  {
    id: 9,
    name: "Kenzo Flower",
    price: 54500,
    promoPrice: 43600,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLAS%201%20copia%2012.png?alt=media&token=e9b79ca8-ab03-4e9c-ab88-bca64704ac6c",
    description:
      "Inspirada en la amapola, este perfume tiene un carácter floral y atalcado, con notas de rosa búlgara, violeta y vainilla. Es suave, delicado y elegante.",
  },
  {
    id: 10,
    name: "Tommy Girl ",
    price: 51000,
    promoPrice: 41000,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLAS%201%20copia%2013.png?alt=media&token=999957b4-f1b1-4259-a6f1-7c65b19a8ea9",
    description:
      "Fresca y floral, combina cítricos con flores como la magnolia y el lirio, y termina con notas de madera suave. Representa a una mujer joven, independiente y alegre",
  },
  {
    id: 11,
    name: "MontBlanc Emblem",
    price: 47000,
    promoPrice: null,
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/productosperfumes.appspot.com/o/perfumes%2FPERFUMES_PLANTILLA%20ELLOS_1%20copia%207.png?alt=media&token=9760bc37-b3b8-4f12-9f2c-0f5d821e410e",
    description:
      "Un perfume masculino con un corazón de especias, canela y hojas frescas, sobre una base de maderas y cuero. Es fuerte y moderno.",
  },
];

export default function StoreApp() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendWhatsAppMessage = (productName: string) => {
    const message = `Hola, estoy interesado en  ${productName}. ¿Puede proporcionarme más información?`;
    const whatsappNumber = "3704806288"; // Reemplaza
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className=" flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Image src={logo} alt="Perfumes Formosa" width={100} height={100} />
          <h1 className="text-3xl font-bold text-gray-900">Perfumes Formosa</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-6 min-h-[48px]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {product.name}
                    {product.inStock ? (
                      ""
                    ) : (
                      <Badge variant="destructive">Sin Stock</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={540}
                    height={675}
                    quality={100}
                    className="w-full object-cover mb-4"
                  />
                  <div className="flex items-center gap-2">
                    {product.promoPrice ? (
                      <>
                        <p className="text-lg line-through text-gray-500">
                          ${product.price}
                        </p>
                        <p className="text-2xl font-bold text-red-600">
                          ${product.promoPrice}
                        </p>
                      </>
                    ) : (
                      <p className="text-2xl font-bold">${product.price}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Ver detalles</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex justify-between items-center">
                          {product.name}{" "}
                          {product.inStock ? (
                            ""
                          ) : (
                            <Badge variant="destructive">Sin Stock</Badge>
                          )}
                        </DialogTitle>
                        <DialogDescription>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            quality={100}
                            className="w-full h-72 object-cover my-4"
                          />
                          <div className="flex items-center gap-2 mb-2">
                            {product.promoPrice ? (
                              <>
                                <p className="text-lg line-through text-gray-500">
                                  Precio: ${product.price}
                                </p>
                                <p className="text-xl font-bold text-red-600">
                                  Oferta: ${product.promoPrice}
                                </p>
                              </>
                            ) : (
                              <p className="text-lg font-semibold">
                                Precio: ${product.price}
                              </p>
                            )}
                          </div>
                          <p>{product.description}</p>
                        </DialogDescription>
                      </DialogHeader>
                      <Button
                        onClick={() => sendWhatsAppMessage(product.name)}
                        className="w-full mt-4"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Consultar por
                        WhatsApp
                      </Button>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
