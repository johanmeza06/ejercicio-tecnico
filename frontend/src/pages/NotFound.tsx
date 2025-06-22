import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <IoAlertCircleOutline className="text-red-500 text-6xl mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          404 - Página no encontrada
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <button
          className="px-6 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition-colors font-semibold"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
