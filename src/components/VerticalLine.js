import React from 'react';

const VerticalLine = (props) => {
  const { sections, color, className } = props;

  const style = {
    borderLeft: `1px solid ${color || 'black'}`,
  };
  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
  };

  return (
    <div
      className={className}
      style={style}
    >
      <div style={{ position: 'relative' }}>
        {
                    sections !== undefined
                    && sections.map((s, index) => {
                      const width = `${25 * (1 + ((index + 1) % 2))}px`;
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <div style={{ ...labelStyle, top: s.top }} key={index}>
                          <hr
                            style={{ width, marginRight: '10px', borderColor: props.color }}
                          />
                          <h3>{s.title}</h3>
                        </div>
                      );
                    })
                }

      </div>

    </div>
  );
};

export default VerticalLine;
