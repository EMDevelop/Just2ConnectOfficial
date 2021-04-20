import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./pagescss/ProductPages.css";

function FAQItem(props) {
    return (
            <Accordion
                style={{
                    marginLeft: "15%",
                    marginRight: "15%",
                    marginBottom: "5px",
                    borderRadius: "10px",
                    backgroundColor: "#e0e8fa",
                    border: "unset",
                    boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                }}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel0a-content"
                    id="panel0a-header"
                >
                    <div className="FAQQuestion">
                    {props.Question}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                    {props.Answer}
                    </div>
                </AccordionDetails>
                </Accordion>
    )
}

export default FAQItem
