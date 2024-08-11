import React from 'react';
import ReactFlow, { Background, Controls, Node } from 'react-flow-renderer';
import CustomNode from './CustomNode';

const nodeTypes = { customNode: CustomNode };

const initialElements = [
  {
    id: '1',
    type: 'customNode',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'customNode',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#fff' },
  },
];

const FlowDiagram = () => {
  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={initialElements} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
