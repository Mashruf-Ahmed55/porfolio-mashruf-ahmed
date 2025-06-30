import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

type Props = {
  name: string;
};

export default function UserConfirmation({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>
        Thanks for your message, {name}! We'll be in touch soon ✨
      </Preview>
      <Body
        style={{
          backgroundColor: '#f0f9ff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          margin: 0,
          padding: '40px 20px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
          }}
        >
          {/* Celebration Header */}
          <Section
            style={{
              background:
                'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
              padding: '40px 40px 32px 40px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Floating celebration elements */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '40px',
                fontSize: '24px',
                opacity: 0.7,
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              🎉
            </div>
            <div
              style={{
                position: 'absolute',
                top: '30px',
                right: '60px',
                fontSize: '20px',
                opacity: 0.6,
                animation: 'float 3s ease-in-out infinite 1s',
              }}
            >
              ✨
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '40px',
                fontSize: '18px',
                opacity: 0.5,
                animation: 'float 3s ease-in-out infinite 2s',
              }}
            >
              🌟
            </div>

            {/* Success Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Text
                style={{
                  fontSize: '40px',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                ✅
              </Text>
            </div>

            <Heading
              style={{
                color: '#ffffff',
                fontSize: '32px',
                fontWeight: '800',
                margin: '0 0 12px 0',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              Message Received!
            </Heading>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '18px',
                margin: 0,
                fontWeight: '500',
                letterSpacing: '0.3px',
              }}
            >
              Thank you for reaching out to us
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: '40px' }}>
            {/* Personal Greeting */}
            <Section style={{ marginBottom: '32px', textAlign: 'center' }}>
              <Text
                style={{
                  color: '#1f2937',
                  fontSize: '24px',
                  fontWeight: '600',
                  margin: '0 0 16px 0',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Hi {name}! 👋
              </Text>
              <Text
                style={{
                  color: '#4b5563',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: '400',
                }}
              >
                Your message has been successfully delivered to our inbox.
              </Text>
            </Section>

            {/* What happens next section */}
            <Section
              style={{
                backgroundColor: '#f0fdf4',
                border: '2px solid #bbf7d0',
                borderRadius: '16px',
                padding: '28px',
                marginBottom: '32px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '24px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                }}
              >
                WHAT'S NEXT?
              </div>

              <div style={{ marginTop: '8px' }}>
                <Row style={{ marginBottom: '16px' }}>
                  <Column style={{ width: '40px', verticalAlign: 'top' }}>
                    <Text
                      style={{ fontSize: '24px', margin: 0, lineHeight: 1 }}
                    >
                      ⚡
                    </Text>
                  </Column>
                  <Column>
                    <Text
                      style={{
                        color: '#065f46',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Quick Response
                    </Text>
                    <Text
                      style={{
                        color: '#047857',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.5',
                      }}
                    >
                      We typically respond within 2-4 hours during business
                      hours
                    </Text>
                  </Column>
                </Row>

                <Row style={{ marginBottom: '16px' }}>
                  <Column style={{ width: '40px', verticalAlign: 'top' }}>
                    <Text
                      style={{ fontSize: '24px', margin: 0, lineHeight: 1 }}
                    >
                      🎯
                    </Text>
                  </Column>
                  <Column>
                    <Text
                      style={{
                        color: '#065f46',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Personalized Reply
                    </Text>
                    <Text
                      style={{
                        color: '#047857',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.5',
                      }}
                    >
                      Our team will review your message and provide a detailed
                      response
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column style={{ width: '40px', verticalAlign: 'top' }}>
                    <Text
                      style={{ fontSize: '24px', margin: 0, lineHeight: 1 }}
                    >
                      🤝
                    </Text>
                  </Column>
                  <Column>
                    <Text
                      style={{
                        color: '#065f46',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 4px 0',
                      }}
                    >
                      Next Steps
                    </Text>
                    <Text
                      style={{
                        color: '#047857',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.5',
                      }}
                    >
                      We'll discuss how we can help you achieve your goals
                    </Text>
                  </Column>
                </Row>
              </div>
            </Section>

            <Hr
              style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                margin: '32px 0',
              }}
            />

            {/* Appreciation Message */}
            <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Text
                style={{
                  color: '#374151',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  margin: '0 0 20px 0',
                  fontStyle: 'italic',
                  fontFamily: 'Georgia, serif',
                }}
              >
                "We're excited to connect with you and explore how we can work
                together!"
              </Text>

              <Text
                style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  margin: '0 0 8px 0',
                  fontWeight: '500',
                }}
              >
                Have a wonderful day! 🌟
              </Text>

              <Text
                style={{
                  color: '#10b981',
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: 0,
                  letterSpacing: '0.5px',
                }}
              >
                – Mashruf Ahmed
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: '#f8fafc',
              padding: '24px 40px',
              borderTop: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                color: '#64748b',
                fontSize: '14px',
                margin: '0 0 8px 0',
                fontWeight: '500',
              }}
            >
              📧 This confirmation was sent automatically
            </Text>
            <Text
              style={{
                color: '#94a3b8',
                fontSize: '12px',
                margin: 0,
              }}
            >
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </Section>
        </Container>

        {/* Bottom spacing */}
        <Section style={{ height: '40px' }} />
      </Body>
    </Html>
  );
}
