import { useEffect } from "react";
import PropTypes from "prop-types";

function PageMeta({ title, description }) {
    useEffect(() => {
        document.title = `${title} | Miguel Bravo`;
        let meta = document.querySelector("meta[name=\"description\"]");
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", description);
    }, [title, description]);

    return null;
}

PageMeta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PageMeta;
