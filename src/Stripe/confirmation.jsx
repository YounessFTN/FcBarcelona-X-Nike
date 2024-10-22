import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const session_id = queryParams.get("session_id");
    if (session_id) {
      setSessionId(session_id);
    }
  }, [location.search]);

  return (
    <div className="confirmation p-8 bg-gray-50">
      <h1 className="text-3xl font-bold">Merci pour votre commande !</h1>
      {sessionId ? (
        <p>Votre numéro de session est : {sessionId}</p>
      ) : (
        <p>Il y a eu un problème avec votre commande.</p>
      )}
    </div>
  );
};

export default Confirmation;
