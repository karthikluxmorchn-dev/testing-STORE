import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleLogin() {
    if (!email.trim() || !password) {
      setMessage('Enter your email and password to continue.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage('Enter a valid email address.');
      return;
    }

    setMessage('Login is not connected yet. Please try again later.');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>B</Text>
            </View>

            <Text style={styles.eyebrow}>WELCOME BACK</Text>
            <Text style={styles.title}>Sign in to BAR</Text>
            <Text style={styles.subtitle}>Enter your details to access your account.</Text>

            <View style={styles.form}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                onChangeText={(value) => {
                  setEmail(value);
                  setMessage('');
                }}
                placeholder="you@example.com"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                value={email}
              />

              <View style={styles.passwordLabelRow}>
                <Text style={styles.label}>Password</Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setMessage('Password reset is not available yet.')}>
                  <Text style={styles.textLink}>Forgot password?</Text>
                </Pressable>
              </View>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="current-password"
                  onChangeText={(value) => {
                    setPassword(value);
                    setMessage('');
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                  value={password}
                />
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
                  onPress={() => setShowPassword((visible) => !visible)}
                  style={styles.showPasswordButton}>
                  <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
                </Pressable>
              </View>

              {message ? <Text style={styles.message}>{message}</Text> : null}

              <Pressable
                accessibilityRole="button"
                onPress={handleLogin}
                style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}>
                <Text style={styles.submitButtonText}>Sign in</Text>
              </Pressable>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don&apos;t have an account?</Text>
              <Pressable
                accessibilityRole="button"
                onPress={() => setMessage('Account creation is not available yet.')}>
                <Text style={styles.textLink}> Create account</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.bottomCaption}>BAR · YOUR ACCOUNT, ALL IN ONE PLACE</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F6FB',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  card: {
    width: '100%',
    maxWidth: 440,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingTop: 36,
    paddingBottom: 30,
    shadowColor: '#162B4D',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 4,
  },
  brandMark: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  brandMarkText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 10,
  },
  title: {
    color: '#14213D',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 28,
  },
  form: {
    gap: 10,
  },
  label: {
    color: '#24324A',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DCE3ED',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: '#14213D',
    fontSize: 15,
    marginBottom: 10,
  },
  passwordLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLink: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '600',
  },
  passwordInputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DCE3ED',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    color: '#14213D',
    fontSize: 15,
  },
  showPasswordButton: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  showPasswordText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
  message: {
    color: '#B42318',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 2,
  },
  submitButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitButtonPressed: {
    opacity: 0.82,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  footerText: {
    color: '#64748B',
    fontSize: 14,
  },
  bottomCaption: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.1,
    marginTop: 22,
    textAlign: 'center',
  },
});
