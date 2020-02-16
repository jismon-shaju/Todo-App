import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListItems(props) {
    console.log(props);
    return (
        <div>
            {
                props.items.map(item => {
                    return (
                        <div className="list" key={item.key}>
                            <p>
                                <input type="text" value={item.text} />
                                <span>
                                    <FontAwesomeIcon className="faicons" icon="trash"/>
                                </span>
                            </p>
                        </div>
                    );
                })
            }
        </div>
    )
}
