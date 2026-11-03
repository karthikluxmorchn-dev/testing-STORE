import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './home-page.styles';

const categories = ['Tonight', 'Cocktails', 'Small plates'];

const menuItems = [
  { name: 'Garden Gimlet', detail: 'Gin · cucumber · basil · lime', price: '$16', category: 'Cocktails' },
  { name: 'House Martini', detail: 'Vodka or gin · olive · lemon oil', price: '$18', category: 'Cocktails' },
  { name: 'Warm Castelvetrano Olives', detail: 'Orange · rosemary · fennel seed', price: '$9', category: 'Small plates' },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tonight');
  const visibleItems = selectedCategory === 'Tonight'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.wordmark}> JP BAR<Text style={styles.wordmarkDot}></Text></Text>
            <Text style={styles.location}>North Madras · Chennai📍</Text>
          </View>
          <View style={styles.openBadge}>
            <View style={styles.openDot} />
            <Text style={styles.openText}>OPEN TONIGHT</Text>
          </View>
        </View>

        <ImageBackground
          accessibilityLabel="Cocktails ready to be served at the bar"
          imageStyle={styles.heroImage}
          source={{ uri: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=85' }}
          style={styles.hero}>
          <View style={styles.heroShade} />
          <View style={styles.heroContent}>
            <Text style={styles.heroEyebrow}>GOOD DRINKS. BETTER COMPANY.</Text>
            <Text style={styles.heroTitle}>Your night{ '\n' }starts here.</Text>
            <Text style={styles.heroSubtitle}>A little room for a long evening.</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Reservations', 'Call us at (212) 555-0148 to save your seat.')}
              style={({ pressed }) => [styles.reserveButton, pressed && styles.pressed]}>
              <Text style={styles.reserveButtonText}>BOOK A TABLE</Text>
              <Text style={styles.reserveArrow}>↗</Text>
            </Pressable>
          </View>
          <Text style={styles.heroIndex}>01 / 03</Text>
        </ImageBackground>

        <View style={styles.detailsRow}>
          <View style={styles.detailBlock}>
            <Text style={styles.detailLabel}>TONIGHT</Text>
            <Text style={styles.detailValue}>5 PM — LATE</Text>
          </View>
          <View style={styles.detailDivider} />
          <View style={styles.detailBlock}>
            <Text style={styles.detailLabel}>FIND US</Text>
            <Text style={styles.detailValue}>14 Orchard Street</Text>
          </View>
          <Text style={styles.pin}>↗</Text>
        </View>

        <View style={styles.menuSection}>
          <View style={styles.sectionHeading}>
            <View>
              <Text style={styles.sectionEyebrow}>MADE FOR THE MOMENT</Text>
              <Text style={styles.sectionTitle}>At the bar</Text>
            </View>
            <Text style={styles.menuMark}>MENU  /  01</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={[styles.categoryButton, isSelected && styles.categoryButtonSelected]}>
                  <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>{category}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={styles.menuList}>
            {visibleItems.map((item, index) => (
              <View key={item.name} style={[styles.menuItem, index === visibleItems.length - 1 && styles.menuItemLast]}>
                <View style={styles.menuItemCopy}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDetail}>{item.detail}</Text>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => Alert.alert('Come on in', 'We are at 14 Orchard Street, open from 5 PM until late.')}
          style={({ pressed }) => [styles.visitButton, pressed && styles.pressed]}>
          <Text style={styles.visitButtonText}>COME FIND US</Text>
          <Text style={styles.visitArrow}>↗</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}