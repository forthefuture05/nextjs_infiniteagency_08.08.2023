import React from 'react'
import styles from "./EditorJsTransformer.module.css"
import Image from 'next/image'

const EditorJsTransformer = (props) => {
    const inhalt = props.inhalt;


    return (
        <div className={`${styles.inhalt} ${props.className}`}>
            {inhalt.blocks.map(e => {
                if (e.type === "header") {
                    switch (e.data.level) {
                        case 1:
                            return <h2 key={e.id}>{e.data.text}</h2>
                            break;

                        case 2:
                            return <h2 key={e.id}>{e.data.text}</h2>
                            break;

                        case 3:
                            return <h2 key={e.id}>{e.data.text}</h2>
                            break;

                        case 4:
                            return <h2 key={e.id}>{e.data.text}</h2>
                            break;

                        default:
                            break;
                    }
                }

                if (e.type === "paragraph") {
                    return <p key={e.id} dangerouslySetInnerHTML={{ __html: e.data.text }}></p>
                }

                if (e.type === "list" && e.data.style === "unordered") {
                    return <ul key={e.id}>
                        {e.data.items.map(item => {
                            return <li key={item}><Image src="/images/check.svg" width={36} height={36} /> <span dangerouslySetInnerHTML={{ __html: item }}></span></li>
                        })}
                    </ul>
                }

                if (e.type === "list" && e.data.style === "ordered") {
                    return <ol key={e.id}>
                        {e.data.items.map(item => {
                            return <li key={item}><span dangerouslySetInnerHTML={{ __html: item }}></span></li>
                        })}
                    </ol>
                }

                if (e.type === "image") {
                    return <Image src={e.data.file.url} width={e.data.file.width} height={e.data.file.height} caption={e.data.caption} />
                }

                if (e.type === "table") {
                    return <table className={styles.table}>
                        <tbody>
                            {e.data.content.map(er => {
                                return <tr>
                                    {er.map(e => {
                                        return <td>
                                            {e}
                                        </td>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>
                }
            })}
        </div>
    )
}

export default EditorJsTransformer;