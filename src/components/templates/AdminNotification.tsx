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
  email: string;
  message: string;
  subject?: string;
};

export default function AdminNotification({
  name,
  email,
  message,
  subject,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body
        style={{
          backgroundColor: '#f8fafc',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          margin: 0,
          padding: '40px 20px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow:
              '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
          }}
        >
          {/* Header with gradient */}
          <Section
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '32px 40px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Text
                style={{
                  fontSize: '32px',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                📬
              </Text>
            </div>
            <Heading
              style={{
                color: '#ffffff',
                fontSize: '28px',
                fontWeight: '700',
                margin: '0 0 8px 0',
                letterSpacing: '-0.5px',
              }}
            >
              New Contact Message
            </Heading>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                margin: 0,
                fontWeight: '400',
              }}
            >
              You have received a new inquiry from your website
            </Text>
          </Section>

          {/* Content */}
          <Section style={{ padding: '40px' }}>
            {/* Contact Information */}
            <Section style={{ marginBottom: '32px' }}>
              <Heading
                style={{
                  color: '#1f2937',
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: '0 0 20px 0',
                  borderBottom: '2px solid #e5e7eb',
                  paddingBottom: '8px',
                }}
              >
                Contact Information
              </Heading>

              <Row style={{ marginBottom: '16px' }}>
                <Column style={{ width: '100px' }}>
                  <Text
                    style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Name
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      color: '#111827',
                      fontSize: '16px',
                      fontWeight: '500',
                      margin: 0,
                    }}
                  >
                    {name}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: '16px' }}>
                <Column style={{ width: '100px' }}>
                  <Text
                    style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Email
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      color: '#2563eb',
                      fontSize: '16px',
                      fontWeight: '500',
                      margin: 0,
                      textDecoration: 'none',
                    }}
                  >
                    {email}
                  </Text>
                </Column>
              </Row>

              {subject && (
                <Row style={{ marginBottom: '16px' }}>
                  <Column style={{ width: '100px' }}>
                    <Text
                      style={{
                        color: '#6b7280',
                        fontSize: '14px',
                        fontWeight: '600',
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Subject
                    </Text>
                  </Column>
                  <Column>
                    <Text
                      style={{
                        color: '#111827',
                        fontSize: '16px',
                        fontWeight: '500',
                        margin: 0,
                      }}
                    >
                      {subject}
                    </Text>
                  </Column>
                </Row>
              )}
            </Section>

            <Hr
              style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                margin: '32px 0',
              }}
            />

            {/* Message Section */}
            <Section>
              <Heading
                style={{
                  color: '#1f2937',
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: '0 0 16px 0',
                }}
              >
                Message
              </Heading>
              <div
                style={{
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '26px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#764ba2',
                    borderRadius: '50%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '36px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%',
                  }}
                />
                <Text
                  style={{
                    color: '#374151',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    margin: '16px 0 0 0',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {message}
                </Text>
              </div>
            </Section>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: '#f9fafb',
              padding: '24px 40px',
              borderTop: '1px solid #e5e7eb',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                color: '#6b7280',
                fontSize: '14px',
                margin: '0 0 8px 0',
                fontWeight: '500',
              }}
            >
              This message was sent from your website contact form
            </Text>
            <Text
              style={{
                color: '#9ca3af',
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
