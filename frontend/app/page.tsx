import Categories from "./components/navbar/Categories";



export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <div className="text-center mt-16 text-7xl font-mono pt-18">Cipher Cracker</div>
      <Categories />
      <div className="text-center font-mono mt-8 text-lg mb-4">
        <div className="text-lg text-center font-mono mt-8 text-lg mb-4">
        <div className="pt-10 pb-16 space-y-2">
                <p className="text-3xl text-blue-500">Goal:</p>
                <p className="text-lg">Given scrambled text, retrieve the original message</p>
            </div>
        </div>
        <div className="text-sm pt-16 space-y-2">
          <p className="mb-1">Note:</p>
          <p className="mb-1">- The text must be at least 2 paragraphs in length</p>
          <p className="mb-1">- The text has to be scrambled using a substitution cipher</p>
          <p className="mb-1">- The text will take about 1 minute to unscramble</p>
          <p className="mb-1">- It might not unscramble the message perfectly</p>
        </div>
        <div className="relative w-full mt-16">
          <p>Example Text:</p>
          <div className="p-4">
            <p className="text-left text-sm">
            Sarah is a cheerful and enthusiastic student who eagerly attends school each day. She thrives on the opportunity to expand her knowledge and discover new things. Among all her subjects, math holds a special place in her heart. The joy of solving equations and understanding mathematical concepts fills her with a sense of accomplishment. Alongside her academic pursuits, Sarah values the friendships she has cultivated at school. During recess, she and her friends engage in various games and activities, laughing and sharing stories. Outside of school hours, Sarah often immerses herself in the world of books, especially those that feature captivating tales about animals. Whether it's diving into the adventures of brave lions or the mischievous antics of curious monkeys, Sarah finds solace and excitement in the pages of her favorite stories. John is different. In the bustling kitchen of a vibrant restaurant, you'll find John, a dedicated chef whose passion for culinary excellence knows no bounds. With precision and creativity, John crafts mouthwatering dishes that tantalize the taste buds of eager customers. His culinary journey began in his grandmother's kitchen, where he absorbed the secrets of traditional cooking techniques and the importance of using fresh, quality ingredients. Today, armed with years of experience and a relentless drive for perfection, John specializes in creating exquisite pasta dishes that leave diners craving more. Beyond the confines of the kitchen, John is a dreamer with ambitious aspirations. He envisions a future where he can share his culinary creations in his own restaurant, a place where patrons can savor not only delicious food but also the warmth of hospitality and the essence of culinary artistry. With each dish he prepares, John takes another step closer to turning his dream into reality, fueled by his unwavering passion and dedication to the craft of cooking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

//mt-4 - space up for different categories
//grid-cols-1 - 1 column for mobile 
//md:grid-cols-3 - 3 columns for medium devices
//lg:grid-cols-5 - 5 columns for large devices
