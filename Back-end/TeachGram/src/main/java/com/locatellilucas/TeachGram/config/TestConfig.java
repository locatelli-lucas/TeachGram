//package com.locatellilucas.teachgram.config;
//
//import com.github.javafaker.Faker;
//import com.locatellilucas.teachgram.entities.Follow;
//import com.locatellilucas.teachgram.entities.Post;
//import com.locatellilucas.teachgram.entities.User;
//import com.locatellilucas.teachgram.entities.UserLike;
//import com.locatellilucas.teachgram.repositories.FollowRepository;
//import com.locatellilucas.teachgram.repositories.PostRepository;
//import com.locatellilucas.teachgram.repositories.UserLikeRepository;
//import com.locatellilucas.teachgram.repositories.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.ComponentScan;
//
//import java.util.List;
//
//@SpringBootApplication
//@ComponentScan("com.locatellilucas.teachgram")
//public class TestConfig implements CommandLineRunner {
//
//    private final Faker faker = new Faker();
//    private PostRepository postRepository;
//    private UserRepository userRepository;
//    private FollowRepository followRepository;
//    private UserLikeRepository userLikeRepository;
//
//    public TestConfig(PostRepository postRepository, UserRepository userRepository, FollowRepository followRepository, UserLikeRepository userLikeRepository) {
//        this.postRepository = postRepository;
//        this.userRepository = userRepository;
//        this.followRepository = followRepository;
//        this.userLikeRepository = userLikeRepository;
//    }
//
//    @Override
//    public void run(String... args) {
//        List<User> listUsers = userRepository.findAll();
//        List<Post> listPosts = postRepository.findAll();
//        String person;
//
//        for(int i = 0; i < 100; i++) {
//            int menOrWomen = ((int) Math.round(Math.random()));
//            person = menOrWomen == 1 ? "men" : "women";
//
//            int randomNum = ((int)(Math.random()*99));
//            int randomUser = (int)(Math.random()*listUsers.size());
//            int randomPost = (int)(Math.random()*listPosts.size());
//
//            String firstName = faker.name().firstName();
//            String lastName = faker.name().lastName();
//            String name = firstName + " " + lastName;
//            String userName = lastName + faker.number().randomNumber(2, true);
//            String bio = faker.lorem().sentence(5);
//            String phone = faker.numerify("(51) 9####-####");
//            String email = firstName.toLowerCase() + lastName.toLowerCase() + "@gmail.com";
//            String password = faker.internet().password(6, 10);
//            User user = new User(name, userName, bio, phone, email, password, "https://randomuser.me/api/portraits/" + person + "/" + randomNum + ".jpg");
//            userRepository.save(user);
//
//            String content = faker.lorem().sentence(15);
//
//            Post post = null;
//
//            if(!listUsers.isEmpty()) {
//                post = postRepository.save(new Post(content, listUsers.get(randomUser), "https://picsum.photos/seed/" + faker.lorem().word() + "/800"));
//                userLikeRepository.save(new UserLike(listUsers.get(randomUser), listPosts.get(randomPost)));
//                followRepository.save(new Follow(listUsers.get(randomUser), user));
//            } else {
//                post = postRepository.save(new Post(content, user, "https://picsum.photos/seed/" + faker.lorem().word() + "/800"));
//            }
//
//            System.out.println(user);
//            System.out.println(post);
//
//            try {
//                Thread.sleep(20000);
//            } catch (InterruptedException ex) {
//                System.out.println(ex.getMessage());
//            }
//        }
//    }
//
//
//}
//
//
