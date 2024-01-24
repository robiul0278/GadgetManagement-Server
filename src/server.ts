import app from './app';
import colors from 'colors';
import mongoose from 'mongoose';
import config from './app/config';

(async () => {
  try {
    await mongoose.connect(config.database_url as string).then(() => {
      console.log(colors.red('Database connection is successful 🛢'));
    });

    app.listen(config.port, () => {
      console.log(colors.yellow(`Server is running on port ${config.port} 😎`));
    });
  } catch (err) {
    console.log(err);
  }
})();
