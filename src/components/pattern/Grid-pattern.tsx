import { useId } from 'react'
import { GridPatternProps } from './gridPattern.interface'



export function GridPattern(props: GridPatternProps) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={props.width}
          height={props.height}
          patternUnits="userSpaceOnUse"
          x={props.x}
          y={props.y}
        >
          <path d={`M.5 ${props.height}V.5H${props.width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {props.squares && (
        <svg x={props.x} y={props.y} className="overflow-visible">
          { props.squares.map((x: any, y: any) => {
            <rect
              strokeWidth="0"
              key={`${props.x}-${props.y}`}
              width={props.width + 1}
              height={props.height + 1}
              x={props.x * props.width}
              y={props.y * props.height}
            />
          })}
        </svg>
      )}
    </svg>
  )
}
