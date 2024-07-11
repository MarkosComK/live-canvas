import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursor from './cursor/LiveCursors'
import React, { useCallback } from 'react';

function Live() {
    const others = useOthers();
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((event: React.PointerEvent) => {
        event.preventDefault();
        
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({ cursor: { x, y}});
    }, []);

    const handlePointerLeave = useCallback((event: React.PointerEvent) => {
        event.preventDefault();

        updateMyPresence({ cursor: null, message: null});
    }, []);

    const handlePointerDown = useCallback((event: React.PointerEvent) => {
        
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({ cursor: { x, y}});
    }, []);

    return (
        <div
        onPointerMove={handlePointerMove} 
        onPointerLeave={handlePointerLeave} 
        onPointerDown={handlePointerDown} 
        className="h-screen w-screen flex justify-center items-center"
        >
            <LiveCursor others={others}/> 
        </div>
    )
}

export default Live
