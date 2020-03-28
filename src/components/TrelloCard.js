import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd'

const TrelloCard = ({ text, id, index }) => {
    return (
        <Draggable
            draggableId={String(id)}
            index={index}
        >
            {provider => (
                <div {...provider.draggableProps}
                 {...provider.dragHandleProps}
                  ref={provider.innerRef}>
                    <Card className="CardContainer">
                        <CardContent>
                            <Typography gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}


export default TrelloCard