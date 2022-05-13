import FormCard from "components/FormCard";
import React from "react";
import { useParams } from "react-router-dom";

export default function Form() {
  const params = useParams();

  return <FormCard movieId={`${params.movieId}`} />;
}
