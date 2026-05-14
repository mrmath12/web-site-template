import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'

const NAVY = '#0A2342'
const AMBER = '#F0A500'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const type = searchParams.get('type') ?? 'generic'
  const name = searchParams.get('name') ?? ''
  const category = searchParams.get('category') ?? ''

  if (type === 'item') {
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            backgroundColor: NAVY,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {category ? (
            <div
              style={{
                backgroundColor: AMBER,
                color: NAVY,
                padding: '8px 28px',
                borderRadius: '999px',
                fontSize: '22px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '36px',
                display: 'flex',
              }}
            >
              {category}
            </div>
          ) : null}

          <div
            style={{
              color: '#ffffff',
              fontSize: '68px',
              fontWeight: 800,
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '28px',
              display: 'flex',
            }}
          >
            {name}
          </div>

          <div
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '30px',
              fontWeight: 400,
              display: 'flex',
            }}
          >
            {siteConfig.name}
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: NAVY,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: '88px',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            display: 'flex',
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            width: '120px',
            height: '5px',
            backgroundColor: AMBER,
            borderRadius: '999px',
            marginBottom: '28px',
            display: 'flex',
          }}
        />

        <div
          style={{
            color: AMBER,
            fontSize: '34px',
            fontWeight: 500,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
