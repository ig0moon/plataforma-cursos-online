import React from "react";
import { Card, CardContent } from "/src/components/ui/card";

const CursoCard = ({ titulo, descricao }) => (
  <Card className="shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer sm:justify-center">
    <CardContent className="p-5">
      <h3 className="font-semibold text-xl mb-2 text-gray-900">{titulo}</h3>
      <p className="text-gray-700">{descricao}</p>
    </CardContent>
  </Card>
);

export default CursoCard;
