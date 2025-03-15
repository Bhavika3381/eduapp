
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';

// const Wishlist = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [wishlist, setWishlist] = useState([
//     {
//       id: '1',
//       title: 'React Native for Beginners',
//       instructor: 'John Doe',
//       rating: 4.5,
//       duration: '8h 30m',
//       price: '$29.99',
//       image: 'https://i.pinimg.com/236x/08/f1/b4/08f1b419f6e8e9d4606b374745f21451.jpg',
//     },
//     {
//       id: '2',
//       title: 'Advanced JavaScript',
//       instructor: 'Jane Smith',
//       rating: 4.7,
//       duration: '10h 15m',
//       price: '$34.99',
//       image: 'https://i.pinimg.com/236x/7b/56/8e/7b568e01183f783a02fa62c7691e3d84.jpg',
//     },
//     {
      //   id: '3',
      //   title: 'Full-Stack Web Development',
      //   instructor: 'Michael Lee',
      //   rating: 4.8,
      //   duration: '12h 45m',
      //   price: '$39.99',
      //   image: 'https://i.pinimg.com/236x/af/ec/71/afec71040217224f194756321ffbfc00.jpg',
      // },
      // {
      //   id: '4',
      //   title: 'Python for Data Science',
      //   instructor: 'Sarah Johnson',
      //   rating: 4.6,
      //   duration: '9h 30m',
      //   price: '$27.99',
      //   image: 'https://i.pinimg.com/236x/7d/4b/a7/7d4ba708ddfb588b247ee85600e94c0a.jpg',
      // },
      // {
      //   id: '5',
      //   title: 'UI/UX Design Fundamentals',
      //   instructor: 'Emily Davis',
      //   rating: 4.7,
      //   duration: '7h 50m',
      //   price: '$25.99',
      //   image: 'https://i.pinimg.com/236x/e0/18/36/e018365c030b36ef5487d35b6aa22116.jpg',
      // },
      // {
      //   id: '6',
      //   title: 'Machine Learning with TensorFlow',
      //   instructor: 'David Kim',
      //   rating: 4.9,
      //   duration: '14h 20m',
      //   price: '$49.99',
      //   image: 'https://i.pinimg.com/474x/fd/56/b2/fd56b2bce297c47137770a33a1160d0e.jpg',
      // }
      
//   ]);

//   const handleRemove = (id) => {
//     setWishlist(wishlist.filter((course) => course.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <LinearGradient colors={['#fff', '#fff']} style={styles.header}>
//         <Text style={styles.headerTitle}>Wishlist</Text>
       
//         <TouchableOpacity style={styles.notificationButton}>
//           <FontAwesome name="bell-o" size={24} color="grey" />
//         </TouchableOpacity>
//       </LinearGradient>

//       <View style={styles.searchContainer}>
//           <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
//           <TextInput 
//             placeholder="Search wishlist..." 
//             style={styles.searchInput} 
//             onChangeText={setSearchQuery} 
//             value={searchQuery}
//           />
//         </View>

//       {/* Wishlist Courses */}
//       {wishlist.length > 0 ? (
//         <FlatList
//           data={wishlist.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.courseCard}>
//               <Image source={{ uri: item.image }} style={styles.courseImage} />
//               <View style={styles.courseInfo}>
//                 <Text style={styles.courseTitle}>{item.title}</Text>
//                 <Text style={styles.courseInstructor}>{item.instructor}</Text>
//                 <Text style={styles.courseDuration}>{item.duration}</Text>
//                 <View style={styles.courseBottomRow}>
//                   <Text style={styles.coursePrice}>{item.price}</Text>
//                   <View style={styles.courseActions}>
//                     <TouchableOpacity style={styles.addToCartButton}>
//                       <Text style={styles.addToCartText}>Add to Cart</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.deleteButton}>
//                       <FontAwesome name="trash" size={20} color="#FF4444" />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           )}
//         />
//       ) : (
//         <View style={styles.emptyState}>
//           <Text style={styles.emptyText}>Your wishlist is empty!</Text>
//           <TouchableOpacity style={styles.browseButton}>
//             <Text style={styles.browseText}>Browse Courses</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   header: { paddingVertical: 15, paddingHorizontal: 15, alignItems: 'left', borderBottomLeftRadius: 0, borderBottom: "black" },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
//   searchContainer: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 10, alignItems: 'center',marginHorizontal: 10, marginVertical: 10, width: '100%' },
//   searchIcon: { marginRight: 10 },
//   searchInput: { flex: 1, height: 40 },
//   notificationButton: { position: 'absolute', right: 20, top: 15 },
//   courseCard: { flexDirection: 'row', backgroundColor: '#fff', margin: 5, padding: 5,  shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, },
//   courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
//   courseInfo: { flex: 1 },
//   courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   courseInstructor: { fontSize: 14, color: '#666' },
//   courseDuration: { fontSize: 12, color: '#888' },
//   courseBottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   coursePrice: { fontSize: 14, fontWeight: 'bold', color: '#0052D4', marginVertical: 5 },
//   courseActions: { flexDirection: 'row', alignItems: 'center' },
//   addToCartButton: { backgroundColor: '#FF5722', padding: 5, borderRadius: 5, marginRight: 10 },
//   addToCartText: { color: '#fff', fontSize: 12 },
//   deleteButton: { padding: 8 },
//   emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   emptyText: { fontSize: 18, color: '#666', marginBottom: 10 },
//   browseButton: { backgroundColor: '#0052D4', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
//   browseText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
// });

// export default Wishlist;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Wishlist = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([
    {
      id: '1',
      title: 'React Native for Beginners',
      instructor: 'John Doe',
      rating: 4.5,
      duration: '8h 30m',
      price: '$29.99',
      image: 'https://i.pinimg.com/236x/08/f1/b4/08f1b419f6e8e9d4606b374745f21451.jpg',
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      rating: 4.7,
      duration: '10h 15m',
      price: '$34.99',
      image: 'https://i.pinimg.com/236x/7b/56/8e/7b568e01183f783a02fa62c7691e3d84.jpg',
    },
    {
      id: '3',
      title: 'Full-Stack Web Development',
      instructor: 'Michael Lee',
      rating: 4.8,
      duration: '12h 45m',
      price: '$39.99',
      image: 'https://i.pinimg.com/236x/af/ec/71/afec71040217224f194756321ffbfc00.jpg',
    },
    {
      id: '4',
      title: 'Python for Data Science',
      instructor: 'Sarah Johnson',
      rating: 4.6,
      duration: '9h 30m',
      price: '$27.99',
      image: 'https://i.pinimg.com/236x/7d/4b/a7/7d4ba708ddfb588b247ee85600e94c0a.jpg',
    },
    {
      id: '5',
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emily Davis',
      rating: 4.7,
      duration: '7h 50m',
      price: '$25.99',
      image: 'https://i.pinimg.com/236x/e0/18/36/e018365c030b36ef5487d35b6aa22116.jpg',
    },
    {
      id: '6',
      title: 'Machine Learning with TensorFlow',
      instructor: 'David Kim',
      rating: 4.9,
      duration: '14h 20m',
      price: '$49.99',
      image: 'https://i.pinimg.com/474x/fd/56/b2/fd56b2bce297c47137770a33a1160d0e.jpg',
    }
  ]);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((course) => course.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#fff', '#fff']} style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>

        {/* Cart Icon */}
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')} // Navigate to Cart Page
        >
          <FontAwesome name="shopping-cart" size={24} color="grey" />
        </TouchableOpacity>
      </LinearGradient>

       {/* Notification Icon */}
       <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notification')} // Open Notification Page
        >
          <FontAwesome name="bell-o" size={24} color="grey" />
        </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search wishlist..." 
          style={styles.searchInput} 
          onChangeText={setSearchQuery} 
          value={searchQuery}
        />
      </View>

      {/* Wishlist Courses */}
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseCard}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseInstructor}>{item.instructor}</Text>
                <Text style={styles.courseDuration}>{item.duration}</Text>
                <View style={styles.courseBottomRow}>
                  <Text style={styles.coursePrice}>{item.price}</Text>
                  <View style={styles.courseActions}>
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.deleteButton}>
                      <FontAwesome name="trash" size={20} color="#FF4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Your wishlist is empty!</Text>
          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.browseText}>Browse Courses</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { paddingVertical: 15, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  searchContainer: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 10, alignItems: 'center', marginHorizontal: 10, marginVertical: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 40 },
  notificationButton: { position: 'absolute', right: 60, top: 15 },
  cartButton: { position: 'absolute', right: 20, top: 15 },
  courseCard: { flexDirection: 'row', backgroundColor: '#fff', margin: 5, padding: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, },
  courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  courseInfo: { flex: 1 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  courseInstructor: { fontSize: 14, color: '#666' },
  courseDuration: { fontSize: 12, color: '#888' },
  courseBottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  coursePrice: { fontSize: 14, fontWeight: 'bold', color: '#0052D4', marginVertical: 5 },
  courseActions: { flexDirection: 'row', alignItems: 'center' },
  addToCartButton: { backgroundColor: '#FF5722', padding: 5, borderRadius: 5, marginRight: 10 },
  addToCartText: { color: '#fff', fontSize: 12 },
  deleteButton: { padding: 8 },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#666', marginBottom: 10 },
  browseButton: { backgroundColor: '#0052D4', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  browseText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default Wishlist;
