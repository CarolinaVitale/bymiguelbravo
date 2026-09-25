import { useEffect } from "react";
import PropTypes from "prop-types";

function PageMeta({ title, description, siteName = "Miguel Bravo" }) {
    useEffect(() => {
        document.title = `${title} | ${siteName}`;
        let meta = document.querySelector("meta[name=\"description\"]");
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", description);
    }, [title, description, siteName]);

    return null;
}

PageMeta.propTypes = {
    siteName: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PageMeta;
